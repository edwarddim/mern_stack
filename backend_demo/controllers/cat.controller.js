const Cat = require("../models/cat.model")

// ALL OF THE CRUD LOGIC

// GET ALL CATS IN DB
module.exports.findAllCats = (req, res) => {
    Cat.find()
        .then(allCats => res.json({allCats}))
        .catch(err => res.json({err}))
}

// CREATE
module.exports.createCat = (req, res) => {
    Cat.create(req.body)
        .then(newCat => res.json({newCat}))
        .catch(err => res.json({err}))
}

// UPDATE

// DELETE