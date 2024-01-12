// Antipodal Average

/*
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/

const listNumbers = [1,2,3,5,22,6];

const antipodalAverage = arrayNumbers => {
    const arrayA = [];
    const arrayB = [];
    const arrayRes = [];

    if (arrayNumbers.length % 2 !== 0)
        arrayNumbers.splice(Math.trunc(arrayNumbers.length / 2) , 1);

    for(let i = 0; arrayNumbers.length > i; i++)
        (arrayNumbers.length/2 > i)
            ? arrayA.push(arrayNumbers[i])
            : arrayB.push(arrayNumbers[i]);
    
    for(let i = 0; arrayA.length > i; i++)
        arrayRes.push((arrayA[i] + arrayB[arrayB.length - 1 - i])/2);

    return arrayRes;
}

console.log(antipodalAverage(listNumbers));