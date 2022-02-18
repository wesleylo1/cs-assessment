function hasUniqueChars(string) {
    let newString = new Set([])
    for (let i = 0; i < string.length; i++) {
      newString.add(string[i])
    }
    console.log(newString.size === string.length)
  }


  hasUniqueChars("Monday");
  // -> True
  
  hasUniqueChars("Moonday");
  // -> False

  //O(n)