//This is an algo for even numbers

function print_even() {

    let num = 2;

    while (num <= 20) {
        if (num % 2 == 0) {
            console.log(num);
        }
        num += 1;
    }
    console.log("why are you not calculating are you done?");
}

//This second ersion is more efficient than the first version.

function print_even2() {

    let num = 2;

    while (num <= 20) {
        num += 2;
        console.log(num);
    }
}

//looking at linear search

//This is building Binary serach.

const myArr =  [17, 3, 75, 202, 80];

function Binary_Search(arr, v) {

    let i = 0;
    let r = arr.length - 1
    let d = ((i + r) /2);
    console.log("my d: ", d);

    while (i != r) {
        if (arr[d] < v) {
            console.log(arr[d + 1]);
        } else if (arr[d] > v) {
            console.log(arr[d - 1])
        } else {
            console.log(d)
        }
    }
}

const startTime = Date.now();
//print_even();
print_even2();
Binary_Search(myArr, 7);
const endTime = Date.now();

console.log(`it took: ${endTime - startTime}  ms.`);

/* Data Structures are used in four basic ways:

- Read
- Search
- Insert
- Delete

- In terms speed we measure based on how many steps does the code take when running.

- We look at a Set, it is a data structure that doesn't allows duplicates.

*/

//A function that searches
//but this method is simillar to linear search one of the most basic saerch methods.

function find_me() {

    let i;

    let arr = [15, 17, 40, 25, 22,30];

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] === 22) {
            console.log("The output is: ",arr[i]);
        } else if (arr[i] > 22 ) {
            console.log("not found")
        }
    }
}

find_me();