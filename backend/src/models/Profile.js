const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    email : {
        type: String,
        unique:true,
        required: true,
        lowercase: true,
    },
    senha : {
        type: String,
        required: true,
        select: false,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Users', UserSchema);