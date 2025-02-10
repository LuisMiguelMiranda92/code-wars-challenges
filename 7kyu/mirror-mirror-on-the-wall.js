// Too long, didn't read
// You get a list of integers, and you have to write a function mirror that returns the "mirror" 
// (or symmetric) version of this list: i.e. the middle element is the greatest, then the next 
// greatest on both sides, then the next greatest, and so on...

// More info
// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. 
// Your function should not mutate the input array, and this will be tested (where applicable). 
// Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

//my solution
function mirror(data) {
    if (data.length === 0) return [];
  
    const sortedArray = [...data].sort((a, b) => a - b);
    const secondPart = [...data].sort((a, b) => b - a).slice(1);
  
    return sortedArray.concat(secondPart);
  }