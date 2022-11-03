const Fruit = require("../models/fruit.model")


// CREATE
module.exports.createMovie = (req, res) => {
    Fruit.create(req.body)
        .then(newFruit => {
            console.log(newFruit)
            res.json(newFruit)
        })
        .catch(errors => res.json(errors))
}
// READ ALL
module.exports.allFruits = (req, res) => {
    Fruit.find()
        .then(allFruits => res.json(allFruits))
        .catch(errors => res.json(errors))
}
// READ ONE
module.exports.oneFruit = (req,res) => {
    Fruit.findOne({_id: req.params.fruit_id})
        .then(oneFruit => res.json(oneFruit))
        .catch(errors => res.json(errors))
}
// UPDATE
module.exports.updateFruit = (req, res) => {
    Fruit.findByIdAndUpdate({_id:req.params.fruit_id}, req.body, {new:true, runValidators:true})
        .then(updatedFruit => res.json(updatedFruit))
        .catch(errors => res.json(errors))
}
// DELETE
module.exports.deleteFruit = (req, res) => {
    Fruit.deleteOne({_id:req.params.fruit_id})
        .then(confirmation => res.json(confirmation))
        .catch(errors => res.json(errors))
}