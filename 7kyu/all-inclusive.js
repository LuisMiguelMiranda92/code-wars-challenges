// Input:

// a string strng
// an array of strings arr

// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise

//my solution
function containAllRots(strng, arr) {
    // your code
    const rotations = []
    for(let i = 0; i < strng.length; i++){
        const rotated = strng.slice(i) + strng.slice(0,i)
        rotations.push(rotated)
    }
    return rotations.every(r => arr.includes(r))
}