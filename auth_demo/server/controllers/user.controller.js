const {User} = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

module.exports.register = (req,res) => {
    User.exists({email : req.body.email})
        .then(userExists => {
            // IF USER EXISTS, SEND BACK AN ERROR
            if(userExists){
                return Promise.reject({
                    errors : {'duplicate' : "Email already exists"}
                })
            }
            // USER DOES NOT EXIST, CREATE THE USER
            const user = new User(req.body)
            return user.save()
        })
        .then((user) => {
            res.json({msg:"Success", "user":user})
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports.login = (req,res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                res.status(400).json({ msg: "invalid login attempt: USER NOT FOUND" });
            }
            else{
                console.log(req.body.password)
                console.log(user.password)
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if(passwordIsValid){
                            const newJWT = jwt.sign({
                                _id: user._id
                            }, process.env.SECRET_KEY)
                            res.cookie("usertoken", newJWT, {httpOnly:true}).json("sucess")
                        }
                        else{
                            res.status(400).json({msg : "INVALID ATTEMPT"})
                        }
                    })
                    .catch(err => res.status(400).json({ msg: "invalid login attempt: PASSWORD ERROR CATCH" }));
            }
        })
}

module.exports.allUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json(err))
}

module.exports.logout = (req, res) => {
    res.clearCookie("usertoken");
    return res.status(200).json("LOGGED OUT")
}