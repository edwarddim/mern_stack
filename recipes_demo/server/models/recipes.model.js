const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "NAME REQUIRED"]
    },
    description:{
        type:String,
        required:[true, "DESCRIPTION REQUIRED"]
    },
    dateMade:{
        type:Date,
        required:[true, "DATE REQUIRED"]
    },
    under30:{
        type:Boolean,
        required:[true, "UNDER 30 REQUIRED"]
    }
}, {timestamps:true})

const Recipe = mongoose.model("Recipe", RecipeSchema)

module.exports = Recipe;