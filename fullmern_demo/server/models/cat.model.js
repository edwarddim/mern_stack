const mongoose = require("mongoose")

const CatSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true, "CAT NAME MUST BE SUPPLIED"]
    },
    age : {
        type: Number,
        min : [0, "YOU CAN'T HAVE NEGATIVE NUMBERS"]
    },
    breed: {
        type: String,
        required : [true, "BREED MUST BE REQUIRED"]
    }
}, {timestamps : true})

const Cat = mongoose.model("Cat", CatSchema)
module.exports = Cat