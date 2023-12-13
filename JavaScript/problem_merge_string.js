//Merge two string alternately

const MergeTwo = (word1, word2) => {
    const maxLength = Math.max(word1.length, word2.length);

    const results = [];

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            console.log(word1[i]);
            results.push(word1[i]);
        }
        if (i < word2.length) {
            console.log(word2[i]);
            results.push(word2[i]);
        }
    }
     return results.join("");
}

let word1 = "abc";
let word2 = "efg";

console.log("The output: ", MergeTwo(word1, word2));
