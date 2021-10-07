"use strict";

class Team {
    constructor() {
        this.teamname = 'Benoit\'s team';
        this.trainer = 'Benoit';
        this.roster = [];
    }
    describeTeam(){
        let description = `This is team ${this.teamname} by trainer ${this.trainer}:`;
        let team = [...this.roster];
        return `<div>${description}<\div>
        <div>${team}<\div>`;
    }

}

export default Team;