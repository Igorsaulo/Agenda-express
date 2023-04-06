const mongoose = require('mongoose');
const validator = require('validator');

const users = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

const usersModel = mongoose.model('users',users);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    };
    register(){
        this.validate();
        if(this.errors.length > 0) return;
    }
    validate(){
        this.cleanUp();
        if(!validator.isEmail(this.body.email)) this.errors.push('Email invalido');
        if(this.body.password.length < 8 || this.body.password.length > 50) this.errors.push('A senha precisa ter de 8/50 caracteres')
    };
    cleanUp(){
        for( const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = ' ';
            }
            this.body = {
                username: this.body.username,
                email: this.body.email,
                password: this.body.password
            }
        }
    };
  }
module.exports = Login