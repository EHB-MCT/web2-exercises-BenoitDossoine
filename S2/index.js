"use strict";

function fetchPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(value => {
                fetch(value.url)
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data);
                        // console.log(data.name);
                        let pokemonType = [];
                        let typeDiv = "";
                        data.types.forEach(type => {
                            pokemonType.push(type.type.name);
                        });
                        pokemonType.forEach(type => {
                            typeDiv += `<p class="${type}">${type}</p>`;
                        });
                        let pokemonTile = `<div class="pokemonItem">
                        <img class="pokemonImg" src="${data.sprites.front_default}" alt="${data.name}">
                        <p class="pokemonNr">${data.id}</p>
                        <p class="pokemonName">${data.name}</p>
                        <div class="pokemonType">
                            ${typeDiv}  
                        </div>
                    </div>`;
                        document.getElementById("pokemonList").innerHTML += pokemonTile;
                    });
            });
        });
}



fetchPokemon();