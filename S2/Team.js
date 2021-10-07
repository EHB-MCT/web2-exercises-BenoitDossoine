"use strict";

class Team {
    constructor() {
        this.teamname = 'Example teamname';
        this.trainer = 'Example trainername';
        this.roster = ["Bulbasaur","Bulbasaur","Bulbasaur"];
    }
    describeTeam(){
        let description = `This is team ${this.teamname} by trainer ${this.trainer}:`;
        let team = [...this.roster];
        document.getElementById("team").innerHTML = `<div>${description}<\div>
        <div>${team}<\div>`;
    }

}

export default Team;