// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. 
// You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"
// Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.

//my solution
function unscrambleEggs(word){
    //coding is feggunegg
    //read through the expression, and remove ALL the "eggs" sequences  
    return word.replaceAll("egg", "")
}