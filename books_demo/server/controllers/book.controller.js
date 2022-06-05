const Book = require("../models/book.model")

module.exports.test = (req,res) => {
    res.json("HELLO WORLD")
}


// CREATE
module.exports.create =  (req,res) => {
    Book.create(req.body)
        .then(newBook => res.json(newBook)) // successful creation
        .catch(err => {
            // console.log(err)
            res.status(400).json(err)
        }) // unsuccessful creation
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
		.catch(err => res.status(400).json(err));
};

// UPDATE
module.exports.updateBook = (req, res) => {
    // findOneAndUpdate takes three arguments, query, payload, boolean
    Book.findOneAndUpdate({ _id: req.params.book_id }, req.body, { new: true, runValidators:true })
      .then(updatedBook => res.json( updatedBook ))
      .catch(err => res.status(400).json( err ));
};

// DELETE

module.exports.deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.book_id })
      .then(result => res.json({ result }))
      .catch(err => res.status(400).json({ err }));
};