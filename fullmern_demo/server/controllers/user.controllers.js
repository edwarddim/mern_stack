const User = require("../models/user.models")


// CREATE
module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(newUser => res.json(newUser) )
        .catch(error => res.status(400).json(error))
}

// READ ALL
module.exports.getAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers) )
        .catch(error => res.json(error))
}

// READ ONE
module.exports.getOneUser = (req, res) => {
    User.findOne({_id:req.params.user_id})
        .then(oneUser => res.json(oneUser) )
        .catch(error => res.json(error))
}

// UPDATE

// DELETE