// IMPORT THE MODELS

const { faker } = require("@faker-js/faker")
// DEFINE ALL MY CONTROLLER FUNCTIONS


// CREATE
// READ ALL
// READ ONE
// UPDATE
// DELETE


// DUMMY METHODS
module.exports.hello = (req, res) => {
    res.json({
        'name' : "Smith Smithster"
    })
}


module.exports.recipeMethod = (req, res) => {
    console.log(req.params)
    res.json(req.params.recipe_id)
}

module.exports.fakerMethod = (req, res) => {
    res.json({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName()
    });
}