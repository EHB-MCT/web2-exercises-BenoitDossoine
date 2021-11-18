"use strict";
import User from "./User.js";

let users = [];
window.onload = async function () {
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
        let password = document.getElementById("passwordInput").value;

        createStudent(userName, fullName, email, course, password);
    })

    let questsData = await getQuests();

    let moduleButtonsContainer = document.getElementById("questModuleButtons");
    moduleButtonsContainer.addEventListener("click", (event) => showModuleQuests(event.target, questsData));
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

function createStudent(userName, fullName, email, course, password) {
    let student = new User(userName, fullName, email, course);
    student.logIn(userName, password);
    users.push(student);

    document.getElementById("loginSection").style.display = "none";
    document.getElementById("leaderboardSection").style.display = "none";
    document.getElementById("profileSection").style.display = "flex";
    document.getElementById("navigation").style.display = "flex";

}

function showModuleQuests(target, questsData) {
    if (target.getAttribute("data-sessionId")) {
        let sessionId = target.getAttribute("data-sessionId");
        console.log(questsData.quests);
    }
}

async function getQuests() {
    let data = await fetch("./questlog.json")
        .then(response => response.json())
        .then(data => data);
    return data;
}