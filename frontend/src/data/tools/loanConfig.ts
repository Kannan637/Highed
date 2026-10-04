export const LOAN_TENURES_YEARS = [1, 2, 3, 5, 7, 10, 15] as const;
export const MORATORIUM_MONTHS = [0, 6, 12, 18] as const;

export const loanConfig = {
  minAmount: 50_000,
  maxAmount: 20_000_000,
  minRate: 0,
  maxRate: 30,
  defaults: { amount: 2_500_000, rate: 10.5, tenureYears: 7, moratoriumMonths: 0 },
  /**
   * During moratorium most Indian lenders charge simple interest that is
   * capitalised (added to principal) when EMIs begin.
   */
  moratoriumInterest: "simple-capitalised" as const,
};
