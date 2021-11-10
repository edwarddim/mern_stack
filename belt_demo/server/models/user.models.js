const mongoose = require("mongoose")

const UserSchema =  mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "First name required"]
    },
    lastName:{
        type:String,
        required:[true, "Last name required"]
    }
}, {timestamps:true})

const User = mongoose.model("User", UserSchema)

module.exports = User