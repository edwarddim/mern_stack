const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title: {
        type : String,
        required: [true, "Title must be provided"]
    },
    pages : {
        type : Number,
        min : [0, "You cannot have negative pages"]
    },
    author : {
        type : String,
        required : [true, "Author name must be provided"]
    }
}, {timestamps:true})

module.exports.Book =  mongoose.model("Book", BookSchema)