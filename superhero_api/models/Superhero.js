const mongoose = require('mongoose');

// DEFINE A SCHEMA
const SuperheroSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[2, "Superhero name  must be longer than 2 chars"]
    },
    power:{
        type:String,
        minLength:[5, "Power description must be longer than 5 chars"]
    },
    age:{
        type:Number,
        required:[true, "Age must be provided"],
        min:[0, "Superhero must be older than 0 years"],
        max:[100, "Superhero must be younger than 100"]
    }
}, {timestamps:true})

// REGISTER THE SCHEMA
const Superhero = mongoose.model('Superhero', SuperheroSchema);
 
module.exports = Superhero;