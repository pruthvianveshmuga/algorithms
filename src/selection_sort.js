import { swap } from "./utils";

export default function selectionSort(inpArr) {
  let arr = inpArr.slice();
  for (let left = 0; left < arr.length; left++) {
    let minIndex = left;
    for (let index = left + 1; index < arr.length; index++) {
      if (arr[index] < arr[minIndex]) {
        minIndex = index;
      }
    }
    swap(arr, left, minIndex);
  }
  return arr;
}
