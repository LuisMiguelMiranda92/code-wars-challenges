// Give you a number array numbers and a number c.

// Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, result format is an array [a,b]

// The array numbers is a sorted array, value range: -100...100

// The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]

//my solution
function findAB(numbers,c){
    // coding and coding...
    for(let i = 0; i < numbers.length; i++){
        for(let x = i + 1 ; x < numbers.length; x++){
            if(numbers[i] * numbers[x] === c){
                return [numbers[i], numbers[x]]
            }
        }
    }
    return null
  }