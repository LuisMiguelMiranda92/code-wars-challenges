// Return the magnitude of a vector, given as an array of its component values.

// The vector (2, 3, 5) would be represented as an array containing three values at indices 0, 1 and 2 respectively.
// The array will always contain at least 2 and at most 100 elements (2 ≤ vector.Length ≤ 100), 
// each of which will be within the range [-100, 100].
// An array containing four elements represents a vector in 4D space.

//my solution
function magnitude(vector) {
    // Your code
    // let magnitude = 0
    // for(let i = 0; i < vector.length; i++){
    //     magnitude += vector[i]**2
    // }
    // return Math.sqrt(magnitude)
    return Math.sqrt(vector.reduce((accumulator, currentValue) => accumulator + currentValue**2, 0))
}

