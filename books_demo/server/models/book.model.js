const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Book name is required"]
    }
}, {timestamps:true})

module.exports.Book = mongoose.model("Book", BookSchema)