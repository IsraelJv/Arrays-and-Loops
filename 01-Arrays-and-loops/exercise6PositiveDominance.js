// Positive dominance

/*
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

const positiveDom = arrayNumbers => { 
    let score = 0;
    arrayNumbers.filter( number => number !== 0); // Quita los 0 del array.
    arrayNumbers.forEach( number => ( number > 0 ) ? score++ : score-- );
    return (score >= 0) ? true : false; // Si queda 0 lo marca como true, lo que es incorrecto. 0 es neutral.
}

console.log(positiveDom([-1, -3, -5, 4, 6767]));