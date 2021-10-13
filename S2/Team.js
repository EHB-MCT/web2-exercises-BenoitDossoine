"use strict";

class Team {
    constructor() {
        this.teamname = 'Benoit\'s team';
        this.trainer = 'Benoit';
        this.roster = [];
    }
    describeTeam() {
        let description = `This is team ${this.teamname} by trainer ${this.trainer}:`;
        let team = "";
        this.roster.forEach((pokemon,index) => {
            let pokemonType = [];
            let typeDiv = "";
            pokemon.types.forEach(type => {
                pokemonType.push(type.type.name);
            });
            pokemonType.forEach(type => {
                typeDiv += `<p class="${type}">${type}</p>`;
            });
            let teamMember = `<div class="teamMember">
            <img class="pokemonImg" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p class="pokemonNr">Nr. ${pokemon.id}</p>
            <p class="pokemonName">${pokemon.name}</p>
            <div class="pokemonTypes">
                ${typeDiv}  
            </div>
            <button class="deleteBtn" id="delete${index}">Remove</button>
            </div>`;
            team += teamMember;
        });
        return `<div id="teamDescription">${description}</div>
        <div id="teamComposition">${team}</div>`;
    }

}

export default Team;