const express = require('express');
const axios = require('axios');
const User = require('../models/Profile');
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth")

function generatetoken(params = {}) {
    return jwt.sign(params, authConfig.secret , {
        expiresIn: 86400,
    });

}

module.exports = {
    async index(request,response) {
        const users = await User.find();

        return response.json(users);
    },


    async store(request,response) {
        const {name, email, senha} = request.body;

        let user = await User.findOne({ email });

        if (!user) {

            user = User.create({
                name,
                email,
                senha,
               
            })
        }
        else{
            return response.status(400).send({ error: 'User already exists'})
        }

        

        return response.json(user);
    },

    async Authent(request, response) {
        const {email ,  senha} = request.body;

        const user = await User.findOne({email}).select('+senha');

        if(!user) 
            return response.status(400).send({error :'User not found'});
        

        if( senha != user.senha)
            return response.status(400).send({error : 'Invalid Password'});


        user.senha = undefined;

        
        
        response.send({ 
            user, 
            token : generatetoken({ id: user.id}),
        });

        return response.json(user);
    },

    
};