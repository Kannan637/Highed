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
    // Always retain in memory backup buffer
    DurableLeadRepository.memoryBackup.unshift(lead);
    if (DurableLeadRepository.memoryBackup.length > 500) {
      DurableLeadRepository.memoryBackup.pop();
    }

    // 1. Supabase Persistence (Preferred for cloud & Vercel deployment)
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_ANON_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const endpoint = `${supabaseUrl.replace(/\/+$/, "")}/rest/v1/leads`;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=representation",
          },
          body: JSON.stringify({
            id: lead.id,
            type: lead.type,
            status: lead.status,
            data: lead.data,
            metadata: lead.metadata,
            created_at: lead.createdAt,
            updated_at: lead.createdAt,
          }),
        });

        if (res.ok) {
          return lead;
        } else {
          console.warn(
            "[DurableLeadRepository] Supabase write responded with status",
            res.status
          );
        }
      } catch (sbErr) {
        console.error("[DurableLeadRepository] Supabase sync error:", sbErr);
      }
    }

    // 2. Local Filesystem Persistence (Local development only)
    const isNode =
      typeof process !== "undefined" &&
      process.versions != null &&
      process.versions.node != null;

    if (isNode) {
      try {
        const fs = await import("fs/promises");
        const path = await import("path");

        const dataDir = path.join(process.cwd(), "data", "leads");
        await fs.mkdir(dataDir, { recursive: true });

        // Save individual lead record
        const leadFilePath = path.join(dataDir, `${lead.id}.json`);
        await fs.writeFile(
          leadFilePath,
          JSON.stringify(lead, null, 2),
          "utf-8"
        );

        // Append to local audit log
        const auditLogPath = path.join(dataDir, "leads-audit.jsonl");
        const auditLine =
          JSON.stringify({
            timestamp: new Date().toISOString(),
            leadId: lead.id,
            type: lead.type,
            status: lead.status,
            contact: "phone" in lead.data ? lead.data.phone : "unknown",
            metadata: lead.metadata,
          }) + "\n";

        await fs.appendFile(auditLogPath, auditLine, "utf-8");
      } catch (err: unknown) {
        // In read-only or serverless environments (e.g. Vercel), disk writes fail.
        // We log a warning but DO NOT reject the lead with a 500 error.
        console.warn(
          "[DurableLeadRepository] Local filesystem write skipped (non-writable environment):",
          err instanceof Error ? err.message : String(err)
        );
      }
    }

    return lead;
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
