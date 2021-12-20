import quickSort from "../src/quick_sort";

describe("Quick sort tests", () => {
  let arr = [2, 3, 1, 5, 7, 4, 6, 8, 9, 10];
  let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  it("should return empty array if empty array is given", () => {
    expect(quickSort([])).toEqual([]);
  });
  it("should sort array if not already sorted", () => {
    expect(quickSort(arr)).toEqual(sortedArr);
  });
  it("should return same array if already sorted", () => {
    expect(quickSort(sortedArr)).toEqual(sortedArr);
  });
});
