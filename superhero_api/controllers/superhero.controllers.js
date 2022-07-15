const Superhero = require("../models/Superhero")

module.exports.test = (req, res) => {
    res.json("TEST FUNCTION")
}

// CREATE
module.exports.createHero = (req, res) => {
    Superhero.create(req.body)
        .then(newHero => res.json(newHero) )
        .catch(error => res.status(400).json(error))
}
// READ ALL
module.exports.getAllSuperheroes = (req, res) => {
    Superhero.find()
        .then(allHeroes => res.json(allHeroes))
        .catch(error => res.json(error))
}

// READ ONE
module.exports.getOneSuperhero = (req, res) => {
    Superhero.findOne({_id: req.params.hero_id})
        .then(oneHero => res.json(oneHero))
        .catch(error => res.json(error))
}

// UPDATE
module.exports.updateSuperhero = (req, res) => {
    Superhero.findOneAndUpdate({_id:req.params.hero_id}, req.body,{ new: true, runValidators: true })
        .then(updatedSuperhero => res.json(updatedSuperhero))
        .catch(error => res.status(400).json(error))
}

// DELETE
module.exports.deleteSuperhero = (req,res) => {
    Superhero.deleteOne({_id:req.params.hero_id})
        .then(confirmation => res.json(confirmation))
        .catch(error => res.json(error))
}