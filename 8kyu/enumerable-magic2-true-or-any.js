// Create an any? (JS: any) function that accepts an array and a block (JS: function), 
// and returns true if the block (/function) returns true for any item in the array. 
// If the array is empty, the function should return false.

//my solution
function any(arr, fun){
    return arr.some(fun)
  }
