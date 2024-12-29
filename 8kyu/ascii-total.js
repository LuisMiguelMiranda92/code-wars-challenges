// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

//my solution
function uniTotal (string) {
    // total up dem unicodes!
    let result = 0
    for(let i = 0; i < string.length; i++){
        result = result + string.charCodeAt(i)
    }
    return result
    }