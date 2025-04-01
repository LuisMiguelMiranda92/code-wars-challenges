// The Arara is an isolated tribe found in the Amazon who count in pairs. 
// For example one to eight is as follows:

// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak
// Take a given number and return the Arara's equivalent.

// e.g.

// 3 --> "adak anane"

// 8 --> "adak adak adak adak"

//my solution
function countArara(n) {
    //your code here
    let numberOfAdak = n / 2
    let finalArray = []
    for(let i = 1; i <= numberOfAdak; i++){
        finalArray.push("adak")
    }
    if(n % 2 !== 0){
        finalArray.push("anane")
    }
    return finalArray.join(" ")
}