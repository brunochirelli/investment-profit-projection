import { isDate, monthDiff } from "./utils";

test("isDate() - basic functionality", () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate(new Date("12/30/2020"))).toBe(true);
  expect(isDate(new Date("30/12/2020"))).toBe(false);
  expect(isDate("date")).toBe(false);
  expect(isDate(1234)).toBe(false);
  expect(isDate("")).toBe(false);
  expect(isDate(true)).toBe(false);
  expect(isDate(false)).toBe(false);
  expect(isDate("12/12/2012")).toBe(false);
});
