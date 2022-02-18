function findLongestWord(array) {
    let word = ''
    for (let i = 0; i < array.length; i++) {
        if (word.length < array[i].length) {
            word = array[i]
        }
    }
    console.log(word.length)
}

findLongestWord(["hi", "hello"]);
// -> 5

// O(n)