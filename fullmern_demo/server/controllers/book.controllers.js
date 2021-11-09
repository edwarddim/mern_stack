const Book = require("../models/book.models")

module.exports.test = (req, res) => {
    res.json("TESTING")
}

module.exports.createBook = (req, res) => {
    console.log(req.body)
    Book.create(req.body) 
        .then(newBook => res.json(newBook)) // SUCCESS
        .catch(err => {
            console.log("VALIDATIONS HAVE FAILED")
            res.status(400).json(err)
        }) //UNSUCCESS
}

module.exports.allBooks = (req,res) => {
    Book.find()
        .then(allBooks => res.json(allBooks))
        .catch(err => res.json(err))
}

module.exports.oneBook = (req,res) => {
    const {book_id} = req.params
    Book.findOne({_id: book_id})
        .then(oneBook => res.json(oneBook))
        .catch(err => res.json(err))
}

module.exports.deleteBook = (req, res) => {
    const {book_id} = req.params
    Book.deleteOne({_id : book_id})
        .then(deletedBook => res.json(deletedBook))
        .catch(err => res.json(err))
}

module.exports.updateBook = (req, res) => {
    const {book_id} = req.params
    Book.findByIdAndUpdate({_id : book_id}, req.body, {runValidators:true, new:true})
        .then(updatedBook => res.json(updatedBook))
        .catch(err => res.status(400).json(err))
}