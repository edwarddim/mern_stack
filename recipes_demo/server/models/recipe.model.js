const mongoose = require("mongoose")

// DEFINE SCHEMA
const RecipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Custom name validation requirement"],
        minLength:[2, "Name must be 2 characters long"]
    },
    dateMade:{
        type:Date,
        required:[true, "Give me date or else"]
    },
    under30Minutes:{
        type:Boolean,
        required:true
    }
}, {timestamps:true});

// REGISTER SHCEMA
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;