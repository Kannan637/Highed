import { z } from "zod";
import { loanConfig } from "@/data/tools/loanConfig";

export const emiCalculatorSchema = z.object({
  amount: z
    .number({ error: "Please enter your loan amount." })
    .min(loanConfig.minAmount, `Loan amount must be at least ₹${loanConfig.minAmount.toLocaleString("en-IN")}.`)
    .max(loanConfig.maxAmount, `Loan amount cannot exceed ₹${loanConfig.maxAmount.toLocaleString("en-IN")}.`),
  rate: z
    .number({ error: "Please enter an interest rate." })
    .min(loanConfig.minRate, "Interest rate must be between 0% and 30%.")
    .max(loanConfig.maxRate, "Interest rate must be between 0% and 30%."),
  tenureYears: z.number({ error: "Please select a loan tenure." }).int().min(1).max(30),
  moratoriumMonths: z.number().int().min(0).max(36),
});

export type EmiCalculatorInput = z.infer<typeof emiCalculatorSchema>;

export interface AmortizationMonth {
  month: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface AmortizationYear {
  year: number;
  principal: number;
  interest: number;
  balance: number;
  months: AmortizationMonth[];
}

export interface EmiCalculatorResult {
  emi: number;
  /** Principal at the start of repayment (includes capitalised moratorium interest). */
  repaymentPrincipal: number;
  moratoriumInterest: number;
  totalInterest: number;
  totalRepayment: number;
  schedule: AmortizationYear[];
}

/** EMI = P·r·(1+r)^n / ((1+r)^n − 1); r = 0 → P / n. Always returns finite numbers. */
export function computeEmi(principal: number, annualRate: number, months: number): number {
  if (months <= 0 || principal <= 0) return 0;
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / months;
  const f = Math.pow(1 + r, months);
  const emi = (principal * r * f) / (f - 1);
  return Number.isFinite(emi) ? emi : 0;
}

export function calculateEmi(input: EmiCalculatorInput): EmiCalculatorResult {
  const n = input.tenureYears * 12;
  const r = input.rate / 12 / 100;
  const moratoriumInterest = input.amount * r * input.moratoriumMonths; // simple, capitalised
  const P = input.amount + moratoriumInterest;
  const emi = computeEmi(P, input.rate, n);

  const schedule: AmortizationYear[] = [];
  let balance = P;
  for (let m = 1; m <= n; m++) {
    const interest = balance * r;
    // Last instalment clears any rounding remainder.
    const principal = m === n ? balance : Math.min(emi - interest, balance);
    balance = Math.max(0, balance - principal);
    const yearIdx = Math.ceil(m / 12) - 1;
    if (!schedule[yearIdx]) schedule[yearIdx] = { year: yearIdx + 1, principal: 0, interest: 0, balance: 0, months: [] };
    const y = schedule[yearIdx];
    y.principal += principal;
    y.interest += interest;
    y.balance = balance;
    y.months.push({ month: m, principal, interest, balance });
  }

  const scheduledInterest = schedule.reduce((a, y) => a + y.interest, 0);
  const totalInterest = scheduledInterest + moratoriumInterest;
  return {
    emi,
    repaymentPrincipal: P,
    moratoriumInterest,
    totalInterest,
    totalRepayment: input.amount + totalInterest,
    schedule,
  };
}
