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
module.exports.getOneUser = (req, res) =>{
    const {id} = req.params
    User.findOne({_id:id})
        .then(oneUser => res.json(oneUser))
        .catch(err => res.json(err))
}
// UPDATE
module.exports.updateUser = (req,res) => {
    const {id} = req.params
    User.findOneAndUpdate({_id : id}, req.body, {new:true, runValidators:true})
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(400).json(err))
}
// DELETE
module.exports.deleteUser = (req, res) => {
    const {id} = req.params
    User.deleteOne({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}