const mongoose = require('mongoose');

// DEFINE SCHEMA
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "NAME IS REQUIRED"],
        minLength:[4, "Name must be at least 4 chars long"]
    },
    age:{
        type:Number,
        min:[0, "Must be older than 0"]
    },
    hairColor:{
        type:String,
        required:[true, 'Must provide hair color']
    }
}, {timestamps:true})


// REGISTER THE SCHEMA
const User = mongoose.model('User', UserSchema);
 
module.exports = User;