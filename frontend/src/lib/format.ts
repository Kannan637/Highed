const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

/** ₹28,40,000 — always finite. */
export const formatINR = (value: number): string => inr.format(Number.isFinite(value) ? Math.round(value) : 0);

/** ₹28.4L / ₹1.2Cr / ₹45,000 compact form. */
export const formatINRCompact = (value: number): string => {
  const v = Number.isFinite(value) ? value : 0;
  if (Math.abs(v) >= 1e7) return `₹${(v / 1e7).toFixed(2).replace(/\.?0+$/, "")}Cr`;
  if (Math.abs(v) >= 1e5) return `₹${(v / 1e5).toFixed(1).replace(/\.0$/, "")}L`;
  return formatINR(v);
};

/** Parse user-typed numeric text ("25,00,000", "10.5") → number, or NaN when empty/invalid. */
export const parseNumber = (raw: string): number => {
  const cleaned = raw.replace(/[,\s₹%]/g, "");
  if (cleaned === "") return Number.NaN;
  return Number(cleaned);
};
