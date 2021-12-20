import { swap } from "./utils";

function _quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  let rand = Math.floor(Math.random() * (right - left + 1)) + left;
  swap(arr, rand, right);
  let pivot = right;
  let partition = left;
  for (let index = left; index < pivot; index++) {
    if (arr[index] <= arr[pivot]) {
      swap(arr, index, partition);
      partition++;
    }
  }
  swap(arr, pivot, partition);
  _quickSort(arr, left, partition - 1);
  _quickSort(arr, partition + 1, right);
}

export default function quickSort(inpArr) {
  let arr = inpArr.slice();
  _quickSort(arr, 0, arr.length - 1);
  return arr;
}
