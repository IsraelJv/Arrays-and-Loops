// Flat array

/*
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
Use any type of algorithm you want like callbacks, recursion, etc...
*/

let multiDimension = [1, [2, 3, [4, 5, [6, [12, [5], 6, [10]]]]]];

const recDimension = ( array, arrayRes = [] ) => {
    // Se verifica que el tipo del array sea un objeto.
    (typeof(array) !== "object")
        // Si es un número, se guarda en el array resultado.
        ? arrayRes.push( array )
        // Si es una lista, pasa por el forEach donde pasa elemento por elemento y el array que se tiene.
        : array.forEach( element => recDimension(element, arrayRes) );
    return arrayRes;
}

const flatArray = recDimension(multiDimension);
console.log(flatArray);