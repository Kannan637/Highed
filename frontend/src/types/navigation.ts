export interface DropdownItem {
  label: string;
  href?: string;
  icon?: string;
  description?: string;
}

export interface StandardDropdownColumn {
  title: string;
  items: DropdownItem[];
}

export interface StandardDropdown {
  columns: StandardDropdownColumn[];
}

export interface CountryDropdownItem {
  name: string;
  code: string;
  href?: string;
}

export interface CountryDropdown {
  countries: CountryDropdownItem[];
}

export type NavDropdownData = StandardDropdown | CountryDropdown;

export interface NavEventItem {
  label: string;
  icon?: string;
  href?: string;
  description?: string;
}
