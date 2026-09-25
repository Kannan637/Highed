import { LeadEntity } from "./types";
import { PersistenceError } from "./errors";

export interface ILeadRepository {
  save(lead: LeadEntity): Promise<LeadEntity>;
  findById(id: string): Promise<LeadEntity | null>;
  findRecent(limit?: number): Promise<LeadEntity[]>;
}

/**
 * Durable repository for lead persistence and immutable audit logging.
 * Uses atomic disk persistence with fallback to memory buffer in non-disk environments.
 */
export class DurableLeadRepository implements ILeadRepository {
  private static memoryBackup: LeadEntity[] = [];

  async save(lead: LeadEntity): Promise<LeadEntity> {
    const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;

    if (isNode) {
      try {
        const fs = await import("fs/promises");
        const path = await import("path");

        const dataDir = path.join(process.cwd(), "data", "leads");
        await fs.mkdir(dataDir, { recursive: true });

        // 1. Save specific lead record
        const leadFilePath = path.join(dataDir, `${lead.id}.json`);
        await fs.writeFile(leadFilePath, JSON.stringify(lead, null, 2), "utf-8");

        // 2. Append to immutable audit log line
        const auditLogPath = path.join(dataDir, "leads-audit.jsonl");
        const auditLine = JSON.stringify({
          timestamp: new Date().toISOString(),
          leadId: lead.id,
          type: lead.type,
          status: lead.status,
          contact: "phone" in lead.data ? lead.data.phone : "unknown",
          metadata: lead.metadata,
        }) + "\n";

        await fs.appendFile(auditLogPath, auditLine, "utf-8");

        // Keep in memory backup for quick query
        DurableLeadRepository.memoryBackup.unshift(lead);
        if (DurableLeadRepository.memoryBackup.length > 500) {
          DurableLeadRepository.memoryBackup.pop();
        }

        return lead;
      } catch (err: unknown) {
        console.error("❌ [DurableLeadRepository] Disk write failed:", err);
        // If filesystem write fails, fallback to memory backup and throw PersistenceError if strict
        DurableLeadRepository.memoryBackup.unshift(lead);
        throw new PersistenceError(
          "Critical persistence failure: unable to write lead to durable storage.",
          err
        );
      }
    } else {
      // Non-Node / Edge runtime: store in memory buffer
      DurableLeadRepository.memoryBackup.unshift(lead);
      return lead;
    }
  }

  async findById(id: string): Promise<LeadEntity | null> {
    const fromMemory = DurableLeadRepository.memoryBackup.find((l) => l.id === id);
    if (fromMemory) return fromMemory;

    try {
      const fs = await import("fs/promises");
      const path = await import("path");
      const leadFilePath = path.join(process.cwd(), "data", "leads", `${id}.json`);
      const content = await fs.readFile(leadFilePath, "utf-8");
      return JSON.parse(content) as LeadEntity;
    } catch {
      return null;
    }
  }

  async findRecent(limit = 20): Promise<LeadEntity[]> {
    return DurableLeadRepository.memoryBackup.slice(0, limit);
  }
}

export const defaultLeadRepository = new DurableLeadRepository();
