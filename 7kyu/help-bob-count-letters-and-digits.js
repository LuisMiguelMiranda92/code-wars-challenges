// Bob is a lazy man.

// He needs you to create a method that can determine how many letters 
// (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

//my solution
function countLettersAndDigits(input) {
    let count = 0;
    for(let i = 0; i < input.length; i++){
        let code = input.charCodeAt(i)
        if (
            (code >= 48 && code <= 57) || // Numbers (0-9)
            (code >= 65 && code <= 90) || // Uppercase letters (A-Z)
            (code >= 97 && code <= 122) // Lowercase letters (a-z)
          ) {
            count++
    }
  }
  return count
}

