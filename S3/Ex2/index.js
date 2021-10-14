"use strict";
const baseURL = "http://www.omdbapi.com/?apikey=36d69f6e&"
window.onload = function () {
    let form = document.getElementById("searchform");
    form.addEventListener("submit", (e) => searchMovies(e))

    function searchMovies(e) {
        e.preventDefault();
        let searchInput = document.getElementById("inputTitle").value;
        let film = getData(`${baseURL}t=${searchInput}`);
        film.then(result => {
            console.log(result);
            let html = createFilmTile(result);
            appendToList(html);
            initAddBtns();
            console.log(document.getElementsByClassName("addBtn")[0].getAttribute("runtime").slice(0, -4));
        })
    }

    async function getData(url) {
        let data = await fetch(url)
        return await data.json();
    }

    function createFilmTile(movie) {
        return `<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${movie.Poster}" class="card-img" alt="${movie.Title} poster">
            </div>
            <div class="col-md-8">
                <div class="card-body d-flex justify-content-start flex-wrap flex-column">
                    <h3 class="card-title">${movie.Title}</h3>
                    <h6>${movie.Year}</h6>
                    <h6>${movie.Director}</h6>
                    <h7>${movie.Runtime}</h7>
                    <button type="button" class="btn btn-outline-primary mt-5 addBtn" runtime = "${movie.Runtime}">Add</button>
                </div>
            </div>
        </div>
    </div>`
    }

    function appendToList(html) {
        document.getElementById("filmList").innerHTML += html;
    }

    function initAddBtns() {
        let list = document.getElementById("filmList");
        list.onclick = function (event) {
            if (event.target.type == "button") {
                console.log("THIS IS A BUTTON");
            };
        }
    }


}