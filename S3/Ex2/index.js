"use strict";

window.onload = function () {
    let parasite = fetch("http://www.omdbapi.com/?apikey=36d69f6e&t=Parasite");
    parasite.then(response => response.json()).then(data => console.log(data));
}