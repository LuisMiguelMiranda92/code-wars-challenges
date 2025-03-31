// We have two consecutive integers k1 and k2, where k2 = k1 + 1

// We need to calculate the lowest strictly positive integer n, such that: the values 
// n⋅k1 and n⋅k2
// have the same digits but in different order.

// E.g. # 1:

// k1 = 100
// k2 = 101
// n = 8919
// #Because 8919 * 100 = 891900 
// and      8919 * 101 = 900819
// E.g. # 2:

// k1 = 325
// k2 = 326
// n = 477
// #Because 477 * 325 = 155025
// and      477 * 326 = 155502
// Your task is to prepare a function that will receive the value of k and outputs the value of n.

// The examples given above will be:

// Input: 100 --> Return: 8919
// Input: 325 --> Return:  477
// Features of the random tests

// 10 < k < 1.000.000.000  (For Javascript and D 1e9)

//my solution
function findLowestInt(k) {
    // your code here
    let i = 1;
    while (1) {
        let x = String(i * k).split('').sort().join('');
        let y = String(i * (k + 1)).split('').sort().join('');
        if (x === y) {
            return i;
        }
        i++;
    }
    return null; // Or some other indication that no solution was found within the limit.
}
