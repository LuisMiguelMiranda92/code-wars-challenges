// Given an array of numbers, check if any of the numbers are 
// the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//My solution
function isVow(a){
const charA = 97
const charE = 101
const charI = 105
const charO = 111
const charU = 117
for(let i = 0; i < a.length; i++){
    if(a[i] === charA){
        a[i] = 'a'
    } else if(a[i] === charE){
        a[i] = 'e'
    } else if(a[i] === charI){
        a[i] = 'i'
    } else if(a[i] === charO){
        a[i] = 'o'
    } else if(a[i] === charU){
        a[i] = 'u'
    }
}
return a

}
