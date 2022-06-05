const {User} = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


module.exports.register = async (req,res) => {
    try{
        const userExists = await User.exists({email : req.body.email})
        if(userExists){
            throw {errors : {'duplicate' : "Email already exists"}}
        }
        const user = new User(req.body)
        await user.save()
        res.json({msg:"Success", "user":user})
    }
    catch(err){
        console.log(err.errors)
        res.status(400).json(err)
    }
}

module.exports.login = async (req,res) => {
    try{
        const user = await User.findOne({ email: req.body.email })
        if(user === null){
            res.status(400).json({ msg: "invalid login attempt: USER NOT FOUND" });
        }
    
        const passwordIsValid = await bcrypt.compare(req.body.password, user.password)
        if(passwordIsValid){
            const newJWT = jwt.sign({
                _id: user._id
            }, process.env.SECRET_KEY)
            res.cookie("usertoken", newJWT, {httpOnly:true}).json("sucess")
        }
        else{
            res.status(400).json({msg : "INVALID ATTEMPT"})
        }
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
}

module.exports.allUsers = async (req, res) => {
    try{
        const allUsers = User.find()
        res.json(allUsers)
    }
    catch(err){
        res.json(err)
    }
}

module.exports.allUsers = (req, res) => {
    // User.find().sort({email : -1})
    User.find().collation({ locale: "en" }).sort({email:1})
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json(err))
}