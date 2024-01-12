// Factorial

/*
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

const prompt = require('prompt-sync')();

const getNumber = () => {
    let number;
    do {
        number = parseInt(prompt(`Ingrese un número: `));
        if (!isNaN(number) && number > 0){
            secondsAlarm = number;
            break;
        }
        console.log("Por favor, ingrese un valor válido...");
    }while(true);
    return number;
}

const getFact = ( number ) => (number === 1) ? 1 : getFact( number - 1 ) * number;

const msgUser = () => {
    const number = getNumber();
    const fact = getFact(number);
    console.log(`El factorial del número ${number} es ${fact}.`);
}

msgUser();