// Description:
// Create a function that returns the sum of the two lowest positive numbers given an array 
// of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//My solution


function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let lowest
    let secondLowest
  for(let i = 2; i <= numbers.length; i++){
    lowest = numbers[0];
    secondLowest = numbers[1];
    if(numbers[i] < lowest){
        secondLowest = lowest
        lowest = numbers[i]
    } else if(numbers[i] < secondLowest){
        secondLowest = numbers[i]
    }
  }
  return lowest + secondLowest
  }