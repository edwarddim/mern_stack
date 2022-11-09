const mongoose = require("mongoose")

const PersonSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name required"]
    },
    age:{
        type:Number,
        required:[true, "Age required"],
        min:[0, "Age has to be a positive number"]
    },
    state:{
        type:String,
        required:[true, "State required"]
    }
}, {timestamps:true})

const Person = mongoose.model("Person", PersonSchema)

module.exports = Person