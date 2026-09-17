export type Sku = {
  name: string;
  href: string;
  vcpu: number;
  memoryGb: number;
  hourlyUsd: number;
  blurb: string;
  featured?: boolean;
};

/** Illustrative launch SKUs — not a quote. Labelled as such in the UI. */
export const skus: Sku[] = [
  {
    name: "Small",
    href: "small",
    vcpu: 1,
    memoryGb: 2,
    hourlyUsd: 0.04,
    blurb: "A quiet desk for one long-running agent.",
  },
  {
    name: "Medium",
    href: "medium",
    vcpu: 2,
    memoryGb: 4,
    hourlyUsd: 0.08,
    blurb: "The default. Packages stay put. Agents spawn children.",
    featured: true,
  },
  {
    name: "Large",
    href: "large",
    vcpu: 4,
    memoryGb: 8,
    hourlyUsd: 0.14,
    blurb: "Heavier jobs that still need a known monthly number.",
  },
];

export const hoursPerMonth = 730;

export function monthlyFromHourly(hourly: number): number {
  return hourly * hoursPerMonth;
}

export function usd(n: number, digits = 2): string {
  return n.toLocaleString("en-AU", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}
