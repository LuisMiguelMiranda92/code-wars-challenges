// You are given two positive integers a and b (a < b <= 20000).
// Complete the function which returns a list of all those numbers in the interval [a, b)
//     whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

//     Be careful about your timing!

//my solution
function notPrimes(a, b) {
  //..
  let finalList = [];

  function numberIsPrime(n) {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  function allDigitsArePrime(n) {
    let allDigitsarePrime = true;
    let aString = a.toString();

    for (let i = 0; i < aString.length; i++) {
      if (!numberIsPrime(parseInt(aString[i]))) {
        allDigitsarePrime = false;
        break;
      }
    }
    return allDigitsarePrime;
  }

  while (a < b) {
    if (!numberIsPrime(a) && allDigitsArePrime(a) === true) {
      finalList.push(a);
    }

    a++;
  }
  return finalList;
}
