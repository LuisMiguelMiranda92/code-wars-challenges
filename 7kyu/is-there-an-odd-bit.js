// Return 1 when any odd bit of x equals 1; 0 otherwise.

// Assume that:

// x is an unsigned, 32-bit integer;
// the bits are zero-indexed (the least significant bit is position 0)
// Examples
//   2  -->  1 (true) because at least one odd bit is 1 (2 = 0b10)
//   5  -->  0 (false) because none of the odd bits are 1 (5 = 0b101)
// 170  -->  1 (true) because all of the odd bits are 1 (170 = 0b10101010)

//my solution
function anyOdd(x) {
    for (let i = 1; i < 32; i += 2) { // Iterate through odd positions (1, 3, 5, ..., 31)
      const mask = 1 << i; // Create the bitmask
      if ((x & mask) !== 0) { // Check if the bit at position i is set
        return 1; // Found a 1 at an odd position
      }
    }
    return 0; // No 1 found at any odd position
  }
