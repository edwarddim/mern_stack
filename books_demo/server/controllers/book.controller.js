const {Book} = require("../models/book.model")

module.exports.test = (req, res) => {
    return res.json({message: "TEST ROUTE"})
}

module.exports.createBook = (req, res) => {
    console.log("BOOK CONTROOLER CREATE")
    console.log(Book)
    Book.create(req.body)
        .then(newBook => res.json(newBook))
        .catch(err => res.status(400).json(err))
}