const User = require("../models/user.models")

module.exports.test = (req, res) => {
    res.json("WORKING!!!")
}

// CREATE
module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(400).json(err))
}
// READ
module.exports.getAllUsers = (req, res) => {
    User.find().sort({firstName: 1})
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json(err))
}
// UPDATE
// DELETE