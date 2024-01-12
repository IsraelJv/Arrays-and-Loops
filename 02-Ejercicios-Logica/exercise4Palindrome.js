// Palindrome

/*
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

const prompt = require('prompt-sync')();

const verifyWordPalindrome = () => {
    let isPalindrome = true;
    let word = prompt("Ingrese una palabra o sentencia: ");
    // / al inicio y al final indican el inicio de una expresión regular.
    // [] Indica que se evaluara un conjunto de caracteres.
    // . indica que se quiere quitar el elemento punto.
    // \s indica que se quiere quitar el elemento espacio.
    // g indica que se quiere aplicar esta expresión en toda la cadena.
    word = word.replace(/[.\s]/g, '').toLowerCase(); 
    console.log(word);

    for (let i = 0; word.length/2 > i; i++ ){
        if(word[i] !== word[word.length - 1 - i]){
            isPalindrome = false;
            break;
        }
    }

    console.log(isPalindrome);
}

verifyWordPalindrome();