"use strict";

import Team from "./Team.js";

let pokemon = [];

function fetchPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(value => {
                fetch(value.url)
                    .then(response => response.json())
                    .then(data => {
                        pokemon.push(data);
                    });
            });
        });
}
window.onload = function () {
    fetchPokemon();
    window.setTimeout(displayPokemon, 3000);

    function displayPokemon() {
        pokemon.sort((a, b) => a.id - b.id);
        pokemon.forEach(element => {
            let pokemonType = [];
            let typeDiv = "";
            element.types.forEach(type => {
                pokemonType.push(type.type.name);
            });
            pokemonType.forEach(type => {
                typeDiv += `<p class="${type}">${type}</p>`;
            });
            let pokemonTile = `<div class="pokemonItem">
                            <img class="pokemonImg" src="${element.sprites.front_default}" alt="${element.name}">
                            <p class="pokemonNr">${element.id}</p>
                            <p class="pokemonName">${element.name}</p>
                            <div class="pokemonTypes">
                                ${typeDiv}  
                            </div>
                            <button class="addBtn" id="btn${element.id}">Add to team</button>
                        </div>`;
            document.getElementById("pokemonList").innerHTML += pokemonTile;
        });

        let team = new Team();
        team.describeTeam();
    }
};