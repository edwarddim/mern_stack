const mongoose = require("mongoose")

// 1. DEFINING THE SCHEMA
const CatSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Cat name must be required"],
        minlength : [3, "Cat name must be longer than 3 chars"]
    },
    num_legs : {
        type: Number,
        min : [0, "Your cat can't have negative legs"],
        max : [5, "Chernobyl cats don't count"]
    },
    breed : {
        type: String,
        required: [true, "Cat breed must be required"]
    },
    gender : {
        type: String,
        required: [true, "Cat gender must be required"]
    },
    age : {
        type: Number,
        min : [0, "Your cat can't have negative age"]
    }
}, {timestamps: true})

// 2. REGISTERING THE SCHEMA
const Cat = mongoose.model("Cat", CatSchema)

// 3. EXPORTING THE SCHEMA TO USE FOR LATER
module.exports = Cat