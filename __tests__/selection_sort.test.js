import selectionSort from "../src/selection_sort";

describe("Selection sort tests", () => {
  let arr = [2, 3, 1, 5, 7, 4, 6, 8, 9, 10];
  let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  it("should return empty array if empty array is given", () => {
    expect(selectionSort([])).toEqual([]);
  });
  it("should sort array if unsorted", () => {
    expect(selectionSort(arr)).toEqual(sortedArr);
  });
  it("should ne same if already sorted", () => {
    expect(selectionSort(sortedArr)).toEqual(sortedArr);
  });
});
