// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

//My solution
function position(letter){
    //Write your own Code!
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const position = alphabet.indexOf(letter) + 1
    return `Position of alphabet: ${position}`
  }