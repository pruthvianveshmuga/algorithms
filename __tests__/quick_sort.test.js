import quickSort from "../src/quick_sort";
import { sortingTests } from "./shared";

describe("Quick sort tests", () => {
  sortingTests(quickSort);
});
