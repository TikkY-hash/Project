"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы смотрели", "");

const prersonalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const firstQuestion = prompt("Один из полседних просмотренных фильмов", ""),
      secondQuestion = prompt("На сколько оцените его?", "");

prersonalMovieDB.movies[firstQuestion] = secondQuestion;

console.log(prersonalMovieDB);
