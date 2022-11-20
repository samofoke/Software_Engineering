
//This is building Binary serach.

const myArr =  [1, 2, 4, 6, 3, 5, 7, 8];

function Binary_Search(arr, v) {

    let i = 0;
    let r = arr.length - 1;
    let d = Math.floor((i + r) /2);

    while (i != r) {
        if (arr[d] == v) {
            return d;
        } else if (arr[d] < v) {
            i = d + 1;
        } else {
            r = d - 1;
        }
    }
    return -1;
}

const startTime = Date.now();

console.log(Binary_Search(myArr, 4));

const endTime = Date.now();

console.log(`it took: ${endTime - startTime}  ms.`);