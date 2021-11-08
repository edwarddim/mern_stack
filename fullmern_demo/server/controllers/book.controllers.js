const Book = require("../models/book.models")

module.exports.test = (req, res) => {
    res.json("TESTING")
}

module.exports.createBook = (req, res) => {
    console.log(req.body)
    Book.create(req.body)
        .then(newBook => res.json(newBook)) // SUCCESS
        .catch(err => res.json(err)) //UNSUCCESS
}

module.exports.allBooks = (req,res) => {
    Book.find()
        .then(allBooks => res.json(allBooks))
        .catch(err => res.json(err))
}