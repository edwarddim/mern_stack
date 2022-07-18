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

// UPDATE

// DELETE