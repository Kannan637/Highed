/**
 * Shared tool reference data. Values are INDICATIVE presets (INR) used to pre-fill
 * calculators; users are expected to edit them to match their offer letter.
 * Review annually.
 */
export const DESTINATIONS = ["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "Dubai"] as const;
export type Destination = (typeof DESTINATIONS)[number];

export const STUDY_LEVELS = ["Undergraduate", "Postgraduate", "MBA", "PhD"] as const;
export type StudyLevel = (typeof STUDY_LEVELS)[number];

export const ACCOMMODATION_TYPES = ["University", "Shared", "Private", "Family"] as const;
export type AccommodationType = (typeof ACCOMMODATION_TYPES)[number];

export const accommodationLabels: Record<AccommodationType, string> = {
  University: "University accommodation",
  Shared: "Shared accommodation",
  Private: "Private accommodation",
  Family: "With family",
};

export interface DestinationCostPreset {
  tuitionPerYear: Record<StudyLevel, number>;
  rentPerMonth: Record<AccommodationType, number>;
  livingPerMonth: number;
  travelPerYear: number;
  insurancePerYear: number;
  visaOneTime: number;
}

export const costPresets: Record<Destination, DestinationCostPreset> = {
  USA: { tuitionPerYear: { Undergraduate: 3000000, Postgraduate: 3500000, MBA: 5000000, PhD: 1000000 }, rentPerMonth: { University: 80000, Shared: 55000, Private: 100000, Family: 0 }, livingPerMonth: 70000, travelPerYear: 150000, insurancePerYear: 200000, visaOneTime: 45000 },
  UK: { tuitionPerYear: { Undergraduate: 2200000, Postgraduate: 2500000, MBA: 4000000, PhD: 2000000 }, rentPerMonth: { University: 70000, Shared: 55000, Private: 90000, Family: 0 }, livingPerMonth: 50000, travelPerYear: 100000, insurancePerYear: 85000, visaOneTime: 60000 },
  Canada: { tuitionPerYear: { Undergraduate: 2000000, Postgraduate: 2200000, MBA: 3500000, PhD: 1200000 }, rentPerMonth: { University: 60000, Shared: 45000, Private: 80000, Family: 0 }, livingPerMonth: 45000, travelPerYear: 120000, insurancePerYear: 60000, visaOneTime: 20000 },
  Australia: { tuitionPerYear: { Undergraduate: 2500000, Postgraduate: 2800000, MBA: 4000000, PhD: 2000000 }, rentPerMonth: { University: 70000, Shared: 50000, Private: 90000, Family: 0 }, livingPerMonth: 55000, travelPerYear: 120000, insurancePerYear: 40000, visaOneTime: 90000 },
  Germany: { tuitionPerYear: { Undergraduate: 150000, Postgraduate: 150000, MBA: 1500000, PhD: 150000 }, rentPerMonth: { University: 30000, Shared: 35000, Private: 55000, Family: 0 }, livingPerMonth: 40000, travelPerYear: 80000, insurancePerYear: 110000, visaOneTime: 8000 },
  Ireland: { tuitionPerYear: { Undergraduate: 1500000, Postgraduate: 2000000, MBA: 3000000, PhD: 1200000 }, rentPerMonth: { University: 60000, Shared: 55000, Private: 90000, Family: 0 }, livingPerMonth: 45000, travelPerYear: 100000, insurancePerYear: 50000, visaOneTime: 25000 },
  Dubai: { tuitionPerYear: { Undergraduate: 1000000, Postgraduate: 1200000, MBA: 2000000, PhD: 1000000 }, rentPerMonth: { University: 50000, Shared: 40000, Private: 70000, Family: 0 }, livingPerMonth: 40000, travelPerYear: 40000, insurancePerYear: 50000, visaOneTime: 40000 },
};

export const DURATIONS = [1, 2, 3, 4] as const;
