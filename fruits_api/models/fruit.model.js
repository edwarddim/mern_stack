const mongoose = require("mongoose")

// DEFINE SCHEMA
const FruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    tropical:{
        type:Boolean,
        required:true
    }
}, {timestamps:true});

// REGISTER SHCEMA
const Fruit = mongoose.model('Fruit', FruitSchema);

module.exports = Fruit;