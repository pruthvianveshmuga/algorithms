import binarySearch from "../src/binary_search";

describe("binarySearch", () => {
  let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  it("should return -1 if target is not in the array", () => {
    expect(binarySearch(sortedArr, 11)).toBe(-1);
  });
  it("should return the index if target is in the array", () => {
    expect(binarySearch(sortedArr, 5)).toBe(4);
  });
});
