const User = require("../models/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const { secretKey } = require("../config/jwt.config")

module.exports.test = (req,res) => {
    return res.json({"message" : "test"})
}

module.exports.register = (req, res) => {
    User.exists({ email: req.body.email })
        .then(userExsists => {
            if (userExsists) {
                const errors = {
                    "errors": { 'duplicate': "USER EXISTS" }
                }
                return Promise.reject(errors)
            }
            const user = new User(req.body);
            return user.save()
        })
        .then(() => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => {
            console.log("ERR: ", err)
            res.status(400).json(err)
        });
}

module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                res.status(400).json({ msg: "invalid login attempt: USER NOT FOUND" });
            }
            else {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if (passwordIsValid) {
                            // CREATE A NEW JWT IF PASSWORD AND EMAIL MATCH
                            const newJWT = jwt.sign({
                                _id: user._id
                            }, secretKey)
                            // TAKES THE NEW JWT AND SENDS IT BACK TO USER ATTACHED TO 
                            // RESPONSE 
                            res
                                .cookie("usertoken", newJWT, { httpOnly: true })
                                .cookie("keyName", "value")
                                .json({ msg: "success!" });
                        }
                        else {
                            res.json({ msg: "invalid login attempt: PASSWORD NOT VALID" });
                        }
                    })
                    .catch(err => res.json({ msg: "invalid login attempt: PASSWORD ERROR CATCH" }));
            }
        })
        .catch(err => res.json(err));
}

module.exports.allUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json(err))
}