import { dayDiff, isDate, monthDiff, numberToCurrency } from "./utils";

describe("isDate check function", () => {
  it("should date check return true", () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date("12/30/2020"))).toBe(true);
  });

  it("should date check return false", () => {
    // wrong format
    expect(isDate(new Date("30/12/2020"))).toBe(false);

    // date but not in Date constructor
    expect(isDate("12/12/2012")).toBe(false);
    expect(isDate("2021-01-01")).toBe(false);

    // wrong inputs
    expect(isDate("date")).toBe(false);
    expect(isDate(1234)).toBe(false);
    expect(isDate("")).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate(false)).toBe(false);
  });
});

describe("monthDiff function", () => {
  it("should work correctly", () => {
    expect(monthDiff(new Date("12/23/2020"), new Date("12/23/2021"))).toBe(12);
    expect(monthDiff(new Date("12/23/2020"), new Date("2021-12-23"))).toBe(12);
    expect(monthDiff(new Date("12/23/2020"), new Date("2022-12-23"))).toBe(24);
    expect(monthDiff(new Date("12/23/2020"), new Date("12/30/2020"))).toBe(0);
    expect(monthDiff(new Date("12/23/2020"), new Date("01/23/2021"))).toBe(1);
  });

  it("should handle errors", () => {
    expect(() =>
      monthDiff(new Date("asdasdasd"), new Date("asdasdasd"))
    ).toThrow();
  });
});

describe("dayDiff basic functionality", () => {
  it("should return the correct day difference", () => {
    // normal year
    expect(dayDiff(new Date("12/23/2020"), new Date("12/23/2021"))).toBe(365);

    // leap year
    expect(dayDiff(new Date("12/23/2019"), new Date("12/23/2020"))).toBe(366);

    // short range
    expect(dayDiff(new Date("12/23/2020"), new Date("12/24/2020"))).toBe(1);
  });

  it("should handle errors", () => {
    expect(() =>
      dayDiff(new Date("asdasdasd"), new Date("asdasdasd"))
    ).toThrow();
  });
});

describe("numberToCurrency basic functionality", () => {
  it("should return the correct format", () => {
    // depends on node 13+
    expect(numberToCurrency(1234)).toMatch(/1.234,00/);
    expect(numberToCurrency(1234000000.5)).toMatch(/1.234.000.000,50/);
  });

  it("should output the correct string on screen", () => {
    // Render
    // Assert
  });
});
