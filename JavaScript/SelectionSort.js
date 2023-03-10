/* This is a selection sort algorithm
*/

let arr = [4, 2, 7, 1, 3];

const SelectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowNum = i;
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[x] < arr[lowNum]) {
                lowNum = x;
            }
        }
        if (lowNum != i) {
            let temp = arr[i];
            arr[i] = arr[lowNum];
            arr[lowNum] = temp;
        }
    }
    return arr;
}

console.log(SelectionSort(arr));
