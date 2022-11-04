const Recipe = require("../models/recipe.model")


module.exports.createRecipe = (req, res) => {
    Recipe.create(req.body)
        .then(newRecipe => {
            console.log(newRecipe)
            res.json(newRecipe)
        })
        .catch(errors => res.json(errors))
}
// READ ALL
module.exports.allRecipes = (req, res) => {
    Recipe.find()
        .then(allRecipes => res.json(allRecipes))
        .catch(errors => res.json(errors))
}
// READ ONE
module.exports.oneRecipe = (req,res) => {
    Recipe.findOne({_id: req.params.recipe_id})
        .then(oneRecipe => res.json(oneRecipe))
        .catch(errors => res.json(errors))
}
// UPDATE
module.exports.updateRecipe = (req, res) => {
    Recipe.findByIdAndUpdate({_id:req.params.recipe_id}, req.body, {new:true, runValidators:true})
        .then(updatedRecipe => res.json(updatedRecipe))
        .catch(errors => res.json(errors))
}
// DELETE
module.exports.deleteRecipe = (req, res) => {
    Recipe.deleteOne({_id:req.params.recipe_id})
        .then(confirmation => res.json(confirmation))
        .catch(errors => res.json(errors))
}