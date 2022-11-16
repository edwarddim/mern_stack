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
    comments:[{
        type:mongoose.Types.ObjectId,
        ref:"Comment"
    }]
}, {timestamps:true})

module.exports.Message = mongoose.model("Message", MessageSchema)
module.exports.Comment = mongoose.model("Comment", CommentSchema)



const UserSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:[true, "Body required"]
    },
    memberships:[{
        type:mongoose.Types.ObjectId,
        ref:"Membership"
    }]
}, {timestamps:true})

const MembershipSchema = mongoose.Schema({
    member:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    group:{
        type:mongoose.Types.ObjectId,
        ref:"Group"
    }
}, {timestamps:true})


const GroupSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Body required"]
    },
    memberships:[{
        type:mongoose.Types.ObjectId,
        ref:"Membership"
    }]
}, {timestamps:true})

