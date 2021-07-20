const mongoose = require("mongoose")


const CommentSchema = mongoose.Schema({
    body:String
}, {timestamps:true})


const MessageSchema = mongoose.Schema({
    title:String,
    image:String,
    comments: [CommentSchema]
}, {timestamps: true})


module.exports.Message = mongoose.model("Message", MessageSchema)
module.exports.Comment = mongoose.model("Comment", CommentSchema)