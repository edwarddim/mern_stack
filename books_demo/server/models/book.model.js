// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title:{
        type:String
    },
    pages:{
        type:Number
    },
    author:{
        type:String
    }
}, {timestamps:true})

module.exports = mongoose.model("Book", BookSchema)