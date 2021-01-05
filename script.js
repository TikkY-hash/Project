"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы смотрели", "");

const prersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    let checkAnswer = true;
    do {
        const firstQuestion = prompt("Один из последних просмотренных фильмов", ""),
            secondQuestion = prompt("На сколько оцените его?", "");
        if (firstQuestion !== '' && secondQuestion !== '' &&
            firstQuestion !== null && secondQuestion !== null && firstQuestion.length < 50 && secondQuestion < 50) {
            prersonalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('done');
        } else {
            checkAnswer = false;
            console.log('error');
        }
    } while (checkAnswer == false);
}



console.log(prersonalMovieDB);