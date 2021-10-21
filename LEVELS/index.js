"use strict";
let users = [];
window.onload = function () {
    let navigation = document.getElementById("navigation");
    navigation.addEventListener("click", (event) => {
        displayPage(event.target);
    })
    let loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let userName = document.getElementById("usernameInput").value;
        let fullName = document.getElementById("fullNameInput").value;
        let email = document.getElementById("emailInput").value;
        let course = document.getElementById("classInput").value;

        createStudent(userName, fullName, email, course);
        console.log(users);
    })
}

function displayPage(target) {
    if (target.id == "loginNav") {
        document.getElementById("loginSection").style.display = "flex";
        document.getElementById("profileSection").style.display = "none";
        document.getElementById("leaderboardSection").style.display = "none";
    } else if (target.id == "profileNav") {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("profileSection").style.display = "flex";
        document.getElementById("leaderboardSection").style.display = "none";
    } else if (target.id == "leaderboardNav") {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("profileSection").style.display = "none";
        document.getElementById("leaderboardSection").style.display = "flex";

    }
}

function createStudent(userName, fullName, email, course) {
    let student = {
        userName: userName,
        fullName: fullName,
        email: email,
        course: course
    };
    users.push(student);
}