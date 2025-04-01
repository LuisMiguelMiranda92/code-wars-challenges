// Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

// Write a function that takes n and finds it's scORe.

//my solution
function score(n) {
    if (n < 0 || !Number.isInteger(n)) {
      return "Invalid input. n must be a non-negative integer.";
    }
  
    let score = 0;
    for (let i = 0; i <= n; i++) {
      score |= i;
    }
    return score;
  }

//   function score(n){
//     let one = 1;
//     while (one < n) {
//       n |= one;
//       one = one << 1;
//     }
//     return n;
//   }