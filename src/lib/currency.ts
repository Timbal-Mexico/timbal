export type Currency = "MXN" | "USD";

export function round2(n: number) {
  return Math.round(n * 100) / 100;
}

export function convertMXNToUSD(mxn: number, usdPerMXN: number) {
  return round2(mxn * usdPerMXN);
}

export function formatMoney(value: number, currency: Currency) {
  if (currency === "USD") {
    return `US$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `$${value.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
