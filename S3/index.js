"use strict";

let number = Math.ceil(Math.random() * 20);
console.log(number);

window.onload = function () {
    let button = document.getElementById("guessBtn");
    button.addEventListener('click', () => {
        let promise = compareNumber(number);
        promise.then(
            resolve => alert(resolve),
            error => alert(error)
        )
    });
};

function compareNumber(nr) {
    return new Promise(function (resolve, reject) {
        let guess = document.getElementById("inputNumber").value;
        if (guess == nr) {
            resolve("You have guessed the right number");
        } else if (guess > nr) {
            resolve("The mystery number is lower. Guess again!");
        } else if (guess < nr) {
            resolve("The mystery number is higher. Guess again!");
        } else {
            reject("That is not a valid number");
        }
    })
}