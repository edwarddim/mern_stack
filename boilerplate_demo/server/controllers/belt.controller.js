// IMPORT IN THE MODEL
const {Recipe} = require("../models/recipe.model")


module.exports.test = (req, res) => {
    res.json("hello world")
}

// CREATE
module.exports.create =  (req,res) => {
    Recipe.create(req.body)
        .then(newRecipe => res.json(newRecipe)) // successful creation
        .catch(err => {
            // console.log(err)
            res.status(400).json(err)
        }) // unsuccessful creation
}


// READ
module.exports.allRecipes = (req,res) => {
    Recipe.find()
        .then(allRecipes => res.json(allRecipes))
        .catch(err => res.json(err))
}
module.exports.oneRecipe = (req, res) => {
	Recipe.findOne({ _id: req.params.recipe_id })
		.then(oneRecipe => res.json(oneRecipe))
		.catch(err => res.status(400).json(err));
};

// UPDATE
module.exports.updateRecipe = (req, res) => {
    // findOneAndUpdate takes three arguments, query, payload, boolean
    Recipe.findOneAndUpdate({ _id: req.params.recipe_id }, req.body, { new: true, runValidators:true })
      .then(updatedRecipe => res.json( updatedRecipe ))
      .catch(err => res.status(400).json( err ));
};


// DELETE
module.exports.deleteRecipe = (req, res) => {
    Recipe.deleteOne({ _id: req.params.recipe_id })
      .then(result => res.json({ result }))
      .catch(err => res.status(400).json({ err }));
};