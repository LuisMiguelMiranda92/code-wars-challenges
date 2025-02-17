// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//my solution
function getCount(str) {
    //passar a string para array contar as vogais e somar
    const vowels = "aeiou"
    return str.split("").reduce((accum, char) => vowels.includes(char) ? accum + 1 : accum, 0)
  }