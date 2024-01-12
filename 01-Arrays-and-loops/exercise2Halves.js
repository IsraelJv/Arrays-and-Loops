// Number divided into halves

/**
Given a number, return the number divided into its halves in an array.

 
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

 
Note: The original example for `numDiv(10)` appears to be incorrect.
 */

const numDiv = number => ( number % 2 === 0) ? [number/2, number/2] : [Math.trunc( number/ 2) + 1, Math.trunc( number / 2) ];

console.log(numDiv(0));
console.log(numDiv(10));