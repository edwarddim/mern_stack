const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    body:{
        type:String,
        required:[true, "Body required"]
    }
}, {timestamps:true})


const MessageSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title required"]
    },
    comments:[CommentSchema]
}, {timestamps:true})


module.exports.Message = mongoose.model("Message", MessageSchema)
module.exports.Comment = mongoose.model("Comment", CommentSchema)