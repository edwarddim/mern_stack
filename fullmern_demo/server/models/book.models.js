const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title is required"]
    },
    pages:{
        type:Number,
        required:[true, "Page is required"],
        min : [0, "You cannot have negative pages"]
    },
    author:{
        type:String,
        required:[true, "Author is required"]
    }
}, {timestamps:true})

const Book = mongoose.model("Book", BookSchema)

module.exports = Book

