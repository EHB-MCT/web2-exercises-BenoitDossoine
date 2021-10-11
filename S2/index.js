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

    let listBtn = document.getElementById("listLink");
    listBtn.addEventListener("click", () => showList());
    let teamBtn = document.getElementById("teamLink");
    teamBtn.addEventListener("click", () => showTeam());

    let team = new Team();

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
                            <p class="pokemonNr">Nr. ${element.id}</p>
                            <p class="pokemonName">${element.name}</p>
                            <div class="pokemonTypes">
                                ${typeDiv}  
                            </div>
                            <button class="addBtn" id="btn${element.id}">Add to team</button>
                        </div>`;
            document.getElementById("pokemonList").innerHTML += pokemonTile;
        });

        let buttons = document.getElementsByClassName("addBtn");
        for (let button of buttons) {
            button.addEventListener("click", () => {
                addPokemon(button.id);
            });
        }

        function addPokemon(id) {
            id = id.substring(3);
            let chosenPokemon = pokemon[id - 1];
            let chosenPokemonName = chosenPokemon.name.charAt(0).toUpperCase() + chosenPokemon.name.slice(1).toLowerCase();
            document.getElementById("messages").style.display = "block";
            if (team.roster.length > 5) {
                document.getElementById("messages").innerHTML = "A team can only contain 6 pokemon!";
                document.getElementById("messages").removeAttribute("class");
                document.getElementById("messages").classList.add("addFail");
            } else if (team.roster.find(element => element == chosenPokemonName) != undefined) {
                document.getElementById("messages").innerHTML = `${chosenPokemonName} is already part of your team!`;
                document.getElementById("messages").removeAttribute("class");
                document.getElementById("messages").classList.add("addFail");
            } else {
                team.roster.push(chosenPokemon);
                document.getElementById("team").innerHTML = team.describeTeam();
                document.getElementById("messages").innerHTML = `${chosenPokemonName} added succesfully to the team!`;
                document.getElementById("messages").removeAttribute("class");
                document.getElementById("messages").classList.add("addSucces");
            }
        }
    }

    function showList() {
        document.getElementById("team").style.display = "none";
        document.getElementById("messages").style.display = "none";
        document.getElementById("pokemonList").style.display = "flex";
    }

    function showTeam() {
        document.getElementById("team").style.display = "flex";
        document.getElementById("messages").style.display = "none";
        document.getElementById("pokemonList").style.display = "none";
    }
};