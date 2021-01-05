import { futureValue, incomeTaxCalculator } from "./formulas";

describe("FV basic functionality", () => {
  it("should returns the right amount", () => {
    expect(futureValue(0.06, 10, -200, -500)).toBe(3531.58);
    expect(futureValue(6 / 100, 10, -200, -500)).toBe(3531.58);
    expect(futureValue(0.06, 0, -100, -500)).toBe(500);
    expect(futureValue(0.06, 1, -200, -500)).toBe(730);
  });
});

describe("income tax handler basic functionality", () => {
  it("should return the right income tax for a given period", () => {
    expect(incomeTaxCalculator(10)).toBe(0.225);
    expect(incomeTaxCalculator(180)).toBe(0.225);
    expect(incomeTaxCalculator(181)).toBe(0.2);
    expect(incomeTaxCalculator(360)).toBe(0.2);
    expect(incomeTaxCalculator(361)).toBe(0.175);
    expect(incomeTaxCalculator(720)).toBe(0.175);
    expect(incomeTaxCalculator(721)).toBe(0.15);
  });

  // it("should handle wrong inputs", () => {
  //   expect(() => incomeTaxCalculator("10")).toThrow();
  // });
});
