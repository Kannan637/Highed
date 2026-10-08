"use client";

import { useEffect } from "react";

// WebMCP Tool Schema definitions conforming strictly to JSON Schema (Draft 7/2020-12)
export const HIGHED_WEBMCP_TOOLS = [
  {
    name: "submit_counselling_inquiry",
    description:
      "Submit student contact details and study abroad preferences to book a free personalized counselling session with HighEd advisors.",
    inputSchema: {
      type: "object",
      properties: {
        fullName: {
          type: "string",
          description: "Student's full legal name",
        },
        email: {
          type: "string",
          format: "email",
          description: "Student's contact email address",
        },
        phone: {
          type: "string",
          description: "Student's 10-digit mobile number with country code (e.g. +91 9876543210)",
        },
        destinationCountry: {
          type: "string",
          enum: [
            "USA",
            "UK",
            "Canada",
            "Australia",
            "Germany",
            "Ireland",
            "Dubai",
          ],
          description: "Target study destination country",
        },
        studyLevel: {
          type: "string",
          enum: [
            "Bachelor's Degree",
            "Master's Degree",
            "MBA",
            "Doctorate / PhD",
            "Diploma / Certificate",
          ],
          description: "Intended degree program level",
        },
        preferredCourse: {
          type: "string",
          description: "Specific academic major or course of interest (e.g. Computer Science, Data Analytics, MBA)",
        },
      },
      required: ["fullName", "email", "phone"],
      additionalProperties: false,
    },
    execute: async (params: Record<string, unknown>) => {
      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: params.fullName,
            email: params.email,
            phone: params.phone,
            destinationCountry: params.destinationCountry || "USA",
            studyLevel: params.studyLevel || "Master's Degree",
            preferredCourse: params.preferredCourse || "",
            countryCode: "+91",
            source: "webmcp_agent",
          }),
        });
        const data = await response.json();
        return {
          success: response.ok,
          message:
            data.message ||
            "Counselling consultation inquiry submitted successfully. HighEd team will reach out within 2 hours.",
          leadId: data.id || null,
        };
      } catch (err: unknown) {
        return {
          success: false,
          error: err instanceof Error ? err.message : "Failed to submit inquiry",
        };
      }
    },
  },
  {
    name: "search_study_destinations",
    description:
      "Look up admission requirements, costs, post-study work rights, and top universities for target study abroad destinations.",
    inputSchema: {
      type: "object",
      properties: {
        country: {
          type: "string",
          enum: [
            "usa",
            "uk",
            "canada",
            "australia",
            "germany",
            "ireland",
            "dubai",
          ],
          description: "Destination country slug in lowercase",
        },
      },
      required: ["country"],
      additionalProperties: false,
    },
    execute: async (params: { country: string }) => {
      const countryData: Record<string, unknown> = {
        usa: {
          country: "United States",
          currency: "USD ($)",
          intakes: ["Fall (Aug/Sep)", "Spring (Jan)", "Summer (May)"],
          averageTuitionYearly: "$20,000 - $45,000",
          averageLivingCostYearly: "$10,000 - $15,000",
          workRights: "12 months standard OPT + 24 months STEM extension (3 years total)",
          testsRequired: "IELTS/TOEFL/Duolingo, GRE/GMAT (optional in many universities)",
        },
        uk: {
          country: "United Kingdom",
          currency: "GBP (£)",
          intakes: ["September/October", "January/February"],
          averageTuitionYearly: "£12,000 - £26,000",
          averageLivingCostYearly: "£9,000 - £12,000 (Outside London)",
          workRights: "2-year Graduate Route Post-Study Work Visa (3 years for PhD)",
          testsRequired: "IELTS UKVI, PTE Academic, or Medium of Instruction (MOI) waivers",
        },
        canada: {
          country: "Canada",
          currency: "CAD ($)",
          intakes: ["Fall (September)", "Winter (January)", "Spring (May)"],
          averageTuitionYearly: "$16,000 - $32,000",
          averageLivingCostYearly: "$15,000 - $20,635 CAD",
          workRights: "Post-Graduation Work Permit (PGWP) up to 3 years",
          testsRequired: "IELTS Academic (min 6.0 each band) or PTE Academic",
        },
        australia: {
          country: "Australia",
          currency: "AUD ($)",
          intakes: ["February/March", "July/August", "November"],
          averageTuitionYearly: "$24,000 - $42,000",
          averageLivingCostYearly: "$24,505 AUD",
          workRights: "Subclass 485 Temporary Graduate Visa (2-4 years)",
          testsRequired: "IELTS, PTE Academic, TOEFL iBT",
        },
        germany: {
          country: "Germany",
          currency: "EUR (€)",
          intakes: ["Winter (Sep/Oct)", "Summer (Mar/Apr)"],
          averageTuitionYearly: "€0 at Public Universities (nominal €150-€350 semester fee)",
          averageLivingCostYearly: "€11,904 Blocked Account",
          workRights: "18-month Job Seeker Visa post graduation",
          testsRequired: "IELTS (6.5), APS Certificate mandatory for Indian applicants",
        },
        ireland: {
          country: "Ireland",
          currency: "EUR (€)",
          intakes: ["September", "January"],
          averageTuitionYearly: "€10,000 - €22,000",
          averageLivingCostYearly: "€10,000 - €12,000",
          workRights: "Third Level Graduate Scheme (2-year stay back for Master's)",
          testsRequired: "IELTS, PTE Academic, Duolingo",
        },
        dubai: {
          country: "Dubai (UAE)",
          currency: "AED",
          intakes: ["September", "January"],
          averageTuitionYearly: "35,000 - 75,000 AED",
          averageLivingCostYearly: "25,000 - 35,000 AED",
          workRights: "UAE Green Visa / Golden Visa pathways for top graduates",
          testsRequired: "IELTS or English proficiency certificate",
        },
      };

      const selected = countryData[params.country.toLowerCase()];
      if (!selected) {
        return {
          error: "Country not found. Available: usa, uk, canada, australia, germany, ireland, dubai",
        };
      }
      return selected;
    },
  },
  {
    name: "calculate_study_cost",
    description:
      "Calculate estimated total financial requirement for studying abroad including tuition and estimated living expenses.",
    inputSchema: {
      type: "object",
      properties: {
        country: {
          type: "string",
          enum: [
            "USA",
            "UK",
            "Canada",
            "Australia",
            "Germany",
            "Ireland",
            "Dubai",
          ],
          description: "Target destination country",
        },
        durationYears: {
          type: "number",
          description: "Course duration in years (e.g. 1, 2, or 4)",
        },
      },
      required: ["country"],
      additionalProperties: false,
    },
    execute: async (params: { country: string; durationYears?: number }) => {
      const years = params.durationYears || 2;
      const baseCosts: Record<string, { tuitionInrPerYear: number; livingInrPerYear: number }> = {
        USA: { tuitionInrPerYear: 2200000, livingInrPerYear: 1000000 },
        UK: { tuitionInrPerYear: 1800000, livingInrPerYear: 1100000 },
        Canada: { tuitionInrPerYear: 1400000, livingInrPerYear: 900000 },
        Australia: { tuitionInrPerYear: 2000000, livingInrPerYear: 1200000 },
        Germany: { tuitionInrPerYear: 50000, livingInrPerYear: 1050000 },
        Ireland: { tuitionInrPerYear: 1500000, livingInrPerYear: 1000000 },
        Dubai: { tuitionInrPerYear: 1200000, livingInrPerYear: 700000 },
      };

      const rate = baseCosts[params.country] || baseCosts["USA"];
      const totalTuition = rate.tuitionInrPerYear * years;
      const totalLiving = rate.livingInrPerYear * years;
      const totalInr = totalTuition + totalLiving;

      return {
        country: params.country,
        durationYears: years,
        annualTuitionApproxInr: rate.tuitionInrPerYear,
        annualLivingApproxInr: rate.livingInrPerYear,
        totalEstimatedExpenseInr: totalInr,
        formattedTotal: `₹${(totalInr / 100000).toFixed(1)} Lakhs INR`,
        advisoryNote:
          "HighEd assists with education loans covering up to 100% of costs without collateral from leading nationalised and private banks.",
      };
    },
  },
];

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (params: any) => Promise<unknown>;
}

interface WebMcpContext {
  tools: Map<string, WebMcpTool>;
  registerTool: (tool: WebMcpTool) => void;
  unregisterTool: (name: string) => void;
  getTools: () => WebMcpTool[];
  executeTool: (name: string, params: unknown) => Promise<unknown>;
}

export function WebMcpProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Build WebMCP registry instance
    const registeredTools = new Map<string, WebMcpTool>();

    const context: WebMcpContext = {
      tools: registeredTools,
      registerTool(tool: WebMcpTool) {
        if (!tool || !tool.name) return;
        registeredTools.set(tool.name, tool);
      },
      unregisterTool(name: string) {
        registeredTools.delete(name);
      },
      getTools() {
        return Array.from(registeredTools.values()).map((t) => ({
          name: t.name,
          description: t.description,
          inputSchema: t.inputSchema,
          execute: t.execute,
        }));
      },
      async executeTool(name: string, params: unknown) {
        const tool = registeredTools.get(name);
        if (!tool) throw new Error(`Tool "${name}" not registered`);
        return await tool.execute(params);
      },
    };

    // Populate default tools
    for (const tool of HIGHED_WEBMCP_TOOLS) {
      context.registerTool(tool as WebMcpTool);
    }

    // Attach to document.modelContext (Chrome standard) and window.modelContext (polyfill/agent inspection)
    const win = window as unknown as { modelContext?: WebMcpContext };
    const doc = document as unknown as { modelContext?: WebMcpContext };

    if (!doc.modelContext) {
      doc.modelContext = context;
    } else if (typeof doc.modelContext.registerTool === "function") {
      // Browser natively implements document.modelContext
      for (const tool of HIGHED_WEBMCP_TOOLS) {
        try {
          doc.modelContext.registerTool(tool as WebMcpTool);
        } catch {
          // Ignore registration duplicates
        }
      }
    }

    if (!win.modelContext) {
      win.modelContext = context;
    }

    // Greet AI agents with machine-readable declaration in console
    if (process.env.NODE_ENV !== "production") {
      console.info(
        "[WebMCP] HighEd tools successfully initialized for Agentic Browsing:",
        Array.from(registeredTools.keys())
      );
    }
  }, []);

  return null;
}
