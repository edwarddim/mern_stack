const mongoose = require("mongoose")

// DEFINE SCHEMA
const RecipeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    dateMade:{
        type:Date
    },
    under30Minutes:{
        type:Boolean
    }
}, {timestamps:true});

// REGISTER SHCEMA
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;