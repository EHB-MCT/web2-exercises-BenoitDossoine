"use strict";
let users = [];
window.onload = function () {
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

function createStudent(userName, fullName, email, course) {
    let student = {
        userName: userName,
        fullName: fullName,
        email: email,
        course: course
    };
    users.push(student);
}