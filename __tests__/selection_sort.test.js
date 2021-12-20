import selectionSort from "../src/selection_sort";
import { sortingTests } from "./shared";

describe("Selection sort tests", () => {
  sortingTests(selectionSort);
});
