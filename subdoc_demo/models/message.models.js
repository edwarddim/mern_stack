const mongoose = require("mongoose")


const CommentSchema = mongoose.Schema({
    body:{
        type:String,
        required:[true, "Comment must be required"]
    }
}, {timestamps:true})


const MessageSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Message title must be provided"]
    },
    comments:[CommentSchema]
}, {timestamps:true})


module.exports.Message = mongoose.model("Message", MessageSchema)
module.exports.Comment = mongoose.model("Comment", CommentSchema)