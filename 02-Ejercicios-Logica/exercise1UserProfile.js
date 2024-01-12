// User profile

/**
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
Store the information and then showcase it in the console. 
Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 */

// Paquete prompt-sync que funciona similar a prompt de navegadores
const prompt = require('prompt-sync')();

console.log('\x1Bc'); // Limpia la consola.

const getDataUser = () => {
    const username = prompt("Ingrese su usuario: ");
    let age;
    do {
        age = parseInt(prompt("Ingrese su edad: "));
        // Se valida que la edad sea un número y que tenga un valor válido.
        if (!isNaN(age) && age > 0 && age < 120) 
            break;
        console.log("Por favor, ingrese una edad válida...");
    } while(true);
    const favoritesMovies = prompt("Ingrese sus peliculas favoritas separadas por comas: ");
    return {username, age, favoritesMovies: favoritesMovies.split(', ')};
}

const getRandomMovie = ( listMovies ) => {
    // El método floor redondea un número para obtener un entero.
    // El método random genera un número aleatorio entre 0 y 1.
    const randomIndex = Math.floor(Math.random() * listMovies.length);
    return listMovies[randomIndex];
}

const showDataUser = () => {
    const dataUser = getDataUser();
    const movieRandomSelect = getRandomMovie(dataUser['favoritesMovies']);

    console.log(`${dataUser['username']} tiene ${dataUser['age']} años.`);
    console.log(`La película ${movieRandomSelect} es una de sus favoritas.`);
}

showDataUser();




