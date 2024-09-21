// This is an agloritm implementing the concept of bubble sorting
/*
const ft_swap = (arr, x1, x2) => {
  [arr[x1], arr[x2]] = [arr[x2], arr[x1]];
};

const bubbleSort = (arr) => {
  let swapped;

  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let x = 0; x < arr.length - i - 1; x++) {
      if (arr[x] > arr[x + 1]) {
        ft_swap(arr, x, x + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
  return arr;
};
*/

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let x = 0; x < arr.length - i - 1; x++) {
      if (arr[x] > arr[x + 1]) {
        [arr[x], arr[x + 1]] = [arr[x + 1], arr[x]];
      }
    }
  }
  return arr;
};

const nums = [7, 1, 3, 6, 2];
const sorted = bubbleSort(nums);
console.log(sorted);
