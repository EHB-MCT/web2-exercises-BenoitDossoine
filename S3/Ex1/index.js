"use strict";

let number = Math.ceil(Math.random() * 20);
console.log(number);

window.onload = function () {
    let button = document.getElementById("guessBtn");
    button.addEventListener('click', () => {
        let guess = document.getElementById("inputNumber").value;
        let promise = compareNumber(guess);
        promise.then(
            resolve => alert(resolve),
            error => alert(error)
        )
    });
};

function compareNumber(guess) {
    return new Promise(function (resolve, reject) {
        if (guess == number) {
            resolve("You have guessed the right number");
        } else if (guess > number) {
            resolve("The mystery number is lower. Guess again!");
        } else if (guess < number) {
            resolve("The mystery number is higher. Guess again!");
        } else {
            reject("That is not a valid number");
        }
    })
}