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
module.exports.allBooks = (req, res) => {
    Book.find()
        .then(allBooks => res.json(allBooks))
        .catch(err => res.json(err))
}

module.exports.oneBook = (req, res) => {
    const {id} = req.params
    Book.findOne({_id: id})
        .then(oneBook => res.json(oneBook))
        .catch(err => res.json(err))

}

// UPDATE

// DELETE
