// Highest number

/**
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures 
you've seen before, determine and output the highest of those numbers.
 */

// Paquete prompt-sync que funciona similar a prompt de navegadores
const prompt = require('prompt-sync')();

console.log('\x1Bc'); // Limpia la consola.

const getListNumbers = () => {
    const listNumbers = [];
    let number;

    console.log("Ingrese 10 números");
    for (let i = 0; i < 10; i++){
        do {
            number = parseInt(prompt(`Número ${i + 1}: `));
            if (!isNaN(number)){
                listNumbers.push(number);
                break;
            }
            console.log("Por favor, ingrese un número válido...");
        }while(true);
    }
    return listNumbers;
}

const getHighestNumber = () => {
    const listNumbers = getListNumbers()
    let hightNumber = 0;
    listNumbers.forEach( number => {
        if(number > hightNumber)
            hightNumber = number
    });
    console.log("El número más grande ingresado es el", hightNumber);
}

getHighestNumber();
