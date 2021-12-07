"use strict";

function QuickSort(arr, left, right) {
  if (left < right) {
    let position = Partition(arr, left, right);
    QuickSort(arr, left, position - 1);
    QuickSort(arr, position + 1, right);
  }
}

function Partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      Swap(arr, i, low);
    }
  }

  Swap(arr, right, low + 1);
  return low + 1;
}

function Swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = QuickSort;
