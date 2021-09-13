const {Book} = require("../models/book.models")

module.exports.test = (req,res) => {
    res.json("Hello World")
}

// CREATE
module.exports.newBook = (req, res) => {
    Book.create(req.body)
        .then(newBook => res.json(newBook))
        .catch(err => res.status(400).json(err))
}

// READ

// UPDATE

// DELETE
