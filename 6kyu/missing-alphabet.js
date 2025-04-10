// In this Kata you have to create a function,named insertMissingLetters,
// that takes in a string and outputs the same string processed in a particular way.

// The function should insert only after the first occurrence of each character of the input string,
// all the alphabet letters that:

// -are NOT in the original string
// -come after the letter of the string you are processing

// Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

// Example:

// input: "holly"

// missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

// output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

// You don't need to validate input, the input string will always contain a certain amount of
// lowercase letters (min 1 / max 50).

//my solution
function insertMissingLetters(str) {
  //your code here
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (result.includes(str[i])) {
      result += str[i];
    } else {
      let updatedAlphabet = alphabet.slice(alphabet.indexOf(str[i]) + 1);
      let filteredAlphabet = updatedAlphabet
        .split("")
        .filter((char) => !str.includes(char))
        .join("");
      result += str[i] + filteredAlphabet.toUpperCase();
    }
  }
  return result;
}
