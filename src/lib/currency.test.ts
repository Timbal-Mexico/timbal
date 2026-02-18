import { describe, it, expect } from "vitest";
import { round2, convertMXNToUSD, formatMoney } from "./currency";

describe("currency utils", () => {
  it("round2 rounds to two decimals", () => {
    expect(round2(12.345)).toBe(12.35);
    expect(round2(12.344)).toBe(12.34);
  });

  it("convertMXNToUSD converts with provided rate", () => {
    const rate = 0.055; // example: 1 MXN = 0.055 USD
    expect(convertMXNToUSD(1000, rate)).toBe(55);
    expect(convertMXNToUSD(25000, rate)).toBe(1375);
  });

  it("formatMoney formats MXN correctly", () => {
    expect(formatMoney(1234.5, "MXN")).toBe("$1,234.50");
  });

  it("formatMoney formats USD correctly with US$ prefix", () => {
    expect(formatMoney(1234.5, "USD")).toBe("US$1,234.50");
  });
});
