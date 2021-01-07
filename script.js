"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    showNumberOfFilms() {
        numberOfFilms = prompt("Сколько фильмов вы смотрели", "");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt("Сколько фильмов вы смотрели", "");
        }
    },
    showMyDb(hide) {
        if (!hide) {
            console.log(this);
        }
    },
    showCount() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    sortAnswer() {
        let i = 0;
        while (i < 2) {
            let checkAnswer = true;
            while (checkAnswer == true) {
                checkAnswer = true;
                const firstQuestion = prompt("Один из последних просмотренных фильмов", ""),
                    secondQuestion = prompt("На сколько оцените его?", "");
                if (firstQuestion !== '' && secondQuestion !== '' &&
                    firstQuestion !== null && secondQuestion !== null && firstQuestion.length < 50 && secondQuestion < 50) {
                    this.movies[firstQuestion] = secondQuestion;
                    console.log('done');
                    checkAnswer = false;
                } else {
                    console.log('error');
                }
            }
            i++;
        }
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let answerOfUser = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");

            while (answerOfUser == '' || answerOfUser == null) {
                answerOfUser = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
            }

            this.genres[i] = answerOfUser;
        }

        this.genres.forEach((value, index, array) => {
            console.log(`${value} #${index + 1} - это ${array}`);
        });
    },
    toggleVisibleMyDB() {
        this.privat = this.privat === false ? this.privat = true : this.privat = false;
    }
};

personalMovieDB.writeYourGenres();