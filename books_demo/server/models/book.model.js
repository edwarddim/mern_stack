// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "CUSTOM VALIDATION MESSAGE FOR TITLE"]
    },
    pages:{
        type:Number,
        required:[true, "CUSTOM VALIDATION MESSAGE FOR PAGES"],
        min:[10, "BOOK PAGES MUST HAVE AT LEAST 10 PAGES"],
        max:[1000, "BOOK PAGES MUST HAVE LESS THAN 1000 PAGES"]
    },
    author:{
        type:String,
        required:[true, "CUSTOM VALIDATION MESSAGE FOR AUTHOR"],
        minLength:[3, "AUTHOR NAME MUST BE LONGER THAN 3 CHARACTERS"]
    }
}, {timestamps:true})

module.exports = mongoose.model("Book", BookSchema)