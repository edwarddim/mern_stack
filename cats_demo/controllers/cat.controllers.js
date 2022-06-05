const Cat = require("../models/cat.models")

module.exports.test = (req, res) => {
    res.json("WORKING!!!")
}
// CREATE
module.exports.createCat = (req,res) => {
    Cat.create(req.body)
        .then(newCat => res.json(newCat)) // SUCCESS
        .catch(err => res.json(err)) //UNSUCCESS
}
// READ
module.exports.allCats = (req,res) => {
    Cat.find()
        .then(allCats => res.json(allCats))
        .catch(err => res.json(err))
}
module.exports.oneCat = (req,res) => {
    const {cat_id} = req.params
    Cat.find({_id : cat_id})
        .then(oneCat => res.json(oneCat))
        .catch(err => res.json(err))
}
// UPDATE
module.exports.updateCat = (req, res) => {
    const {cat_id} = req.params
    Cat.findByIdAndUpdate({_id : cat_id}, req.body, {runValidators:true, new:true})
        .then(updatedCat => res.json(updatedCat))
        .catch(err => res.json(err))
}
// DELETE
module.exports.deleteCat = (req,res) => {
    const {cat_id} = req.params
    Cat.findOneAndDelete({_id : cat_id})
        .then(deletedCat => res.json(deletedCat))
        .catch(err => res.json(err))
}