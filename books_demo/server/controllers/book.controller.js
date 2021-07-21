const {Book} = require("../models/book.model")

module.exports.test = (req, res) => {
    return res.json({message: "TEST ROUTE"})
}
// ----------------- CREATE --------------//
module.exports.createBook = (req, res) => {
    console.log("BOOK CONTROOLER CREATE")
    console.log(req.body)
    Book.create(req.body)
        .then(newBook => res.json(newBook))
        .catch(err => res.status(400).json(err))
}

// ----------------- READ ----------------//
module.exports.allBooks = (req, res) => {
    Book.find().sort({createdAt: "asc"})
        .then(allBooks => res.json(allBooks))
        .catch(err => res.json(err))
}

module.exports.oneBook = (req, res) => {
    const {book_id} = req.params
    Book.findOne({_id: book_id})
        .then(oneBook => res.json(oneBook))
        .catch(err => res.json(err))
}

// ----------------- UPDATE ----------------//
module.exports.updateBook = (req, res) => {
    const {book_id} = req.params
    Book.findOneAndUpdate({_id: book_id}, req.body, {new:true, runValidators:true} )
        .then(updatedBook => res.json(updatedBook))
        .catch(err => res.status(400).json(err))
}

// ----------------- DELETE ----------------//
module.exports.deleteBook = (req, res) => {
    const {book_id} = req.params
    Book.deleteOne({_id : book_id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
} 