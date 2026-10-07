const { add, subtract } = require("./calculator");

describe("calculator", () => {
  test("add returns the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("subtract returns the difference of two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, 5)).toBe(-3);
    expect(subtract(0, 0)).toBe(0);
  });

  test("add and subtract handle floating point numbers", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
  });

  test("do not take any String as input", () => {
    expect(() => add("2", 3)).toThrow();
    expect(() => subtract(5, "2")).toThrow();
  });
});
