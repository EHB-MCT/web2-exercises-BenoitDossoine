"use strict";

const client_id = "gFnN3Fklrw";
const apiHost = `https://api.boardgameatlas.com/api/`;
window.onload = function () {
    let boardgames = fetchData("search", "name=Catan");
    boardgames.then(games => {
        let gameResults = games.games;

        gameResults.forEach(game => {
            let gameHtml = createGameTile(game);
            addGameTile(gameHtml);
        });
    });
}

async function fetchData(endpoint, parameters) {
    let data = await fetch(`${apiHost}${endpoint}?${parameters}&client_id=${client_id}`);
    return await data.json();
}

function createGameTile(game) {
    return `<div class="col-6">
    <div class="card mb-3" >
    <div class="row no-gutters">
        <div class="col-md-4">
            <img src="${game.image_url}" class="card-img" alt="${game.name} poster">
        </div>
        <div class="col-md-8">
            <div class="card-body d-flex justify-content-start flex-wrap flex-column">
                <h3 class="card-title">${game.name}</h3>
                <h6>${game.year_published}</h6>
                <h6>${game.min_players}-${game.max_players} players</h6>
                <h7>${game.min_playtime}</h7>
            </div>
        </div>
    </div>
</div>
</div>`
}

function addGameTile(html) {
    document.getElementById("gameList").innerHTML += html;
}