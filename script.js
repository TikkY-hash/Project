"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы смотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}



for (let i = 0; i < 2; i++) {
    let checkAnswer;
    do {
        checkAnswer = true;
        const firstQuestion = prompt("Один из последних просмотренных фильмов", ""),
            secondQuestion = prompt("На сколько оцените его?", "");
        if (firstQuestion !== '' && secondQuestion !== '' &&
            firstQuestion !== null && secondQuestion !== null && firstQuestion.length < 50 && secondQuestion < 50) {
            personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('done');
        } else {
            checkAnswer = false;
            console.log('error');
        }
    } while (checkAnswer == false);
}



console.log(personalMovieDB);