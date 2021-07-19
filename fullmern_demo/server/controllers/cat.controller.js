const Cat = require('../models/cat.model')

module.exports.test = (req, res) => {
    res.json({
        message : "TEST MESSAGE"
    })
}

// GET ALL CATS
module.exports.allCats = (req, res) => {
    Cat.find({})
        .then(allCats => res.json({allCats}))
        .catch(err => res.json({err}))
}

module.exports.createCat = (req, res) => {
    // console.log("HITTING THE CREATE CAT CONTROLLER")
    // console.log(req.body)
    Cat.create(req.body)
        .then(newCat => res.json({newCat}))
        .catch(err => {
            // console.log(err)
            res.status(400).json(err)
        })
}

module.exports.findOneCat = (req, res) => {
    const {id} = req.params
    Cat.findOne({_id: id })
        .then(oneCat => res.json(oneCat))
        .catch(err => res.json(err))
}

module.exports.updateCat = (req, res) => {
    const {id} = req.params
    Cat.findOneAndUpdate({_id : id}, req.body, {new:true, runValidators:true})
        .then(updatedCat => res.json(updatedCat))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteCat = (req, res) => {
    const {id} = req.params
    Cat.deleteOne({_id : id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}