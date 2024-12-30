// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//my solution
function noBoringZeros(n) {
    // your code
    nString = n.toString()
    while(nString.endsWith("0")){
        nString = nString.slice(0, -1)
    }
    return +nString

  }