import { CityData } from "@/types/city";
import { chennai } from "./chennai";
import { coimbatore } from "./coimbatore";
import { tirupathi } from "./tirupathi";
import { vellore } from "./vellore";
import { thiruvallur } from "./thiruvallur";

export const cities: Record<string, CityData> = {
  chennai,
  coimbatore,
  tirupathi,
  vellore,
  thiruvallur,
};

export const allCities: CityData[] = Object.values(cities);

export function getCityBySlug(slug: string): CityData | undefined {
  return cities[slug.toLowerCase()];
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cities);
}

export { chennai, coimbatore, tirupathi, vellore, thiruvallur };
