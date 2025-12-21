'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("How many movies have you watched already?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies have you watched already?", "");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("One of the last movies I watched?", "").trim(),
                b = prompt("How much would you rate it?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Done");
            } else {
                console.log("Error");
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Watched quite a few films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are a classic spectator");
        } else if (personalMovieDB >= 30) {
            console.log("You are a movie buff");
        } else {
            console.log("Error");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Your favorite genre is numbered: ${i}`);
            personalMovieDB.genres[i - 1] = genre;

            if (genre === "" || genre === null) {
                console.log("You have entered incorrect data");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - is ${item}`);
        });
    }
};
