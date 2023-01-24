//The quadratic problem

const arr = [1, , 5, 3, 9, 1, 4]


function checkDuplicate(ar) {

    for (let i = 0; ar.length; i++) {
        for (let x = 0; x < ar.length; x++) {
            if (i !== x && ar[i] === ar[x]) {
                return true;
            }
        }
    }
    return false;
}

console.log(checkDuplicate(arr));

