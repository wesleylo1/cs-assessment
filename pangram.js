function isPangram(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    string = string.toLowerCase()
    let value = true
    for (let i = 0; i < alphabet.length; i++) {
        if(string.indexOf(alphabet[i]) < 0) {
            value = false;
        }
    }
    console.log(value);
}

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

// O(n)
