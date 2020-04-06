import { maxProfit } from "../../src/arrays/bestTimeToBuyAndSellStock";

describe("maxProfit tests", () => {
  test("empty array", () => {
    // arrange
    const numbers = [] as number[];
    const actual = maxProfit(numbers);
    expect(actual).toEqual(0);
  });
  test("array with values not sorted", () => {
    // arrange
    const numbers = [7, 1, 5, 3, 6, 4];
    const actual = maxProfit(numbers);
    expect(actual).toEqual(7);
  });
  test("array with sorted values", () => {
    // arrange
    const numbers = [1, 2, 3, 4, 5];
    const actual = maxProfit(numbers);
    expect(actual).toEqual(4);
  });
  test("array with values not sorted", () => {
    // arrange
    const numbers = [7, 6, 4, 3, 1];
    const actual = maxProfit(numbers);
    expect(actual).toEqual(0);
  });
  test("array with values not sorted", () => {
    // arrange
    const numbers = [2, 1, 2, 0, 1];
    const actual = maxProfit(numbers);
    expect(actual).toEqual(2);
  });
});
