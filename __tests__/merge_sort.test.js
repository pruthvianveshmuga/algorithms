import mergeSort from "../src/merge_sort";
import { sortingTests } from "./shared";

describe("Merge Sort Tests", () => {
  sortingTests(mergeSort);
});
