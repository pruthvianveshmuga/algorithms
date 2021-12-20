export default function sortingTests(algorithm) {
  let arr = [2, 3, 1, 5, 7, 4, 6, 8, 9, 10];
  let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  it("should return empty array if empty array is given", () => {
    expect(algorithm([])).toEqual([]);
  });
  it("should sort array if not already sorted", () => {
    expect(algorithm(arr)).toEqual(sortedArr);
  });
  it("should return same array if already sorted", () => {
    expect(algorithm(sortedArr)).toEqual(sortedArr);
  });
}
