"use strict";

class User{
    constructor(username,fullname,email,course){
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.course = course;
    }

    logIn(username,password){
        return {
            status: 'OK',
            message: `user ${this.username} logged in!`
        }
    }

    completeQuest(quest){

    }
}

export default User;