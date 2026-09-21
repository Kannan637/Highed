import { Country } from "@/types/country";
import { dubai } from "./dubai";
import { usa } from "./usa";
import { uk } from "./uk";
import { canada } from "./canada";
import { australia } from "./australia";
import { germany } from "./germany";
import { ireland } from "./ireland";

export const countries: Record<string, Country> = {
  dubai,
  usa,
  uk,
  canada,
  australia,
  germany,
  ireland,
};

export const allCountries: Country[] = Object.values(countries);

export function getCountryBySlug(slug: string): Country | undefined {
  return countries[slug.toLowerCase()];
}

export function getAllCountrySlugs(): string[] {
  return Object.keys(countries);
}

export { dubai, usa, uk, canada, australia, germany, ireland };
