"use strict";


const baseURL = "http://www.omdbapi.com/?apikey=36d69f6e&"
window.onload = function () {
    let timer = 0;
    let form = document.getElementById("searchform");
    let searchInput = document.getElementById("inputTitle");
    // form.addEventListener("submit", (e) => searchMovies(e))

    searchInput.addEventListener('input', (e) => searchMovies(e));

    function searchMovies(e) {
        e.preventDefault();
        let searchInput = document.getElementById("inputTitle").value;
        let film = getData(`${baseURL}s=${searchInput}`);
        film.then(result => {
                if (result.Response == 'True') {
                    createFilmList(result.Search);
                }
            })
    }

    async function getData(url) {
        let data = await fetch(url);
        return await data.json();
    }

    function createFilmList(listArray) {

        document.getElementById("filmList").innerHTML = ""
        listArray.forEach((element) => {
            let html = createFilmTile(element);
            appendToList(html)
        })
        initButtons();
    }

    function createFilmTile(movie) {
        return `<div class="card mb-3 filmTile" style="max-width: 540px;" data-attribute="${movie.imdbID}">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${movie.Poster}" class="card-img" alt="${movie.Title} poster">
            </div>
            <div class="col-md-8">
                <div class="card-body d-flex justify-content-start flex-wrap flex-column">
                    <h3 class="card-title">${movie.Title}</h3>
                    <h6>${movie.Year}</h6>
                    <button type="button" class="btn btn-outline-primary mt-5 infoBtn" data-id="${movie.imdbID}">More info</button>
                </div>
            </div>
        </div>
    </div>`
    }

    function appendToList(html) {
        document.getElementById("filmList").innerHTML += html;
    }

    function initButtons() {
        let list = document.getElementById("filmList");
        list.onclick = function (event) {
            console.log("hello");
            if (event.target.classList.contains("infoBtn")) {
                let imdbID = event.target.getAttribute("data-id");
                let film = getData(`${baseURL}i=${imdbID}`);
                film.then(movie => {
                    event.target.parentElement.innerHTML = `<h3 class="card-title">${movie.Title}</h3>
                    <h6>${movie.Year}</h6>
                    <h6>${movie.Director}</h6>
                    <h7>${movie.Runtime}</h7>
                    <button type="button" class="btn btn-outline-primary mt-5 addBtn" data-runtime="${movie.Runtime}">Add</button>`;
                });
            }
            if (event.target.classList.contains("addBtn")) {
                let runTime = parseInt(event.target.getAttribute("data-runtime").slice(0, -4));
                timer += runTime;
                updateTimer();
            };
        }
    }

    function updateTimer() {
        document.getElementById("counter").innerHTML = timer;
    }
}