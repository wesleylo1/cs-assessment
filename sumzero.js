function addToZero(array) {
    let value = 'false'
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if ((array[i] + array[j] === 0)) {
                value = 'true'
            } 
        }
    }
    console.log(value)
}

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// // -> False

addToZero([1, 2, 3, -2]);
// // -> True

// O(n^2)