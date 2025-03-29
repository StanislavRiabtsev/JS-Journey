'use strict';

const numberOfFilms = +prompt("How many movies have you watched already?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

const a = prompt("One of the last movies I watched?", ""),
    b = prompt("How much would you rate it?", ""),
    c = prompt("One of the last movies I watched?", ""),
    d = prompt("How much would you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);