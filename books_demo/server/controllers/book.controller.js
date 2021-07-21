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
    Book.find().sort({name: "desc"})
        .then(allBooks => res.json(allBooks))
        .catch(err => res.json(err))
}