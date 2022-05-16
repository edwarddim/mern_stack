const Book = require("../models/book.model")

module.exports.test = (req,res) => {
    res.json("HELLO WORLD")
}


// CREATE
module.exports.create =  (req,res) => {
    Book.create(req.body)
        .then(newBook => res.json(newBook))
        .catch(err => res.json(err))
}

// READ
module.exports.allBooks = (req,res) => {
    Book.find()
        .then(allBooks => res.json(allBooks))
        .catch(err => res.json(err))
}

module.exports.oneBook = (req, res) => {
	Book.findOne({ _id: req.params.book_id })
		.then(oneBook => res.json(oneBook))
		.catch(err => res.status(400).json({ err }));
};

// UPDATE

// DELETE