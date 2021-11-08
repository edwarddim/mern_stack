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

const Book = mongoose.model("Book", BookSchema)

module.exports = Book

