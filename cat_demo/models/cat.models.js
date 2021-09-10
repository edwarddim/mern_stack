const mongoose = require("mongoose")

// 1. DEFINE THE SCHEMA
const CatSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, "Cat name must be required"]
    },
    type : {
        type: String,
        required : [true, "Cat type must be required"]
    },
    age : {
        type: Number,
        required : [true, "Cat age must be required"],
        min : [0, "Cat age must be positive"]
    },
    fixed : {
        type: Boolean,
        required : [true, "Cat fixed status must be required"]
    },
    color : {
        type: String,
        required : [true, "Cat color must be required"]
    }
}, {timestamps:true})

// 2. REGISTERING THE SCHEMA
const Cat = mongoose.model("Cat", CatSchema)

module.exports = Cat