import { futureValue } from "./formulas";

describe("FV basic functionality", () => {
  it("returns the right amount", () => {
    expect(futureValue(0.06, 10, -200, -500, 1)).toBe(3689.75237605618);
    expect(futureValue(6 / 100, 10, -200, -500, 1)).toBe(3689.75237605618);
  });
});
