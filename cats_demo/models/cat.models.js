// IMPORT MONGOOSE
const mongoose = require('mongoose');

// 1. DEFINE THE SCHEMA
const CatSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Cat name must be required!"]
    },
    likesDogs : {
        type : Boolean,
        required : [true, "Cat must have opinions on dogs"]
    },
    breed : {
        type : String,
        required : [true, "Cat must have a breed"]
    },
    age : {
        type : Number,
        required : [true, "Cat age is required"],
        min : [0, "Cat age must be a positive number"]
    }
},{timestamps:true})

// 2. REGISTER THE SCHEMA
const Cat = mongoose.model("Cat", CatSchema)

module.exports = Cat