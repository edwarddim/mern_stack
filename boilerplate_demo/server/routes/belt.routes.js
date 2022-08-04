const BeltController = require("../controllers/belt.controller")


module.exports = app => {
    app.get("/api/test", BeltController.test)

    // CREATE
    app.post("/api/recipes/new", BeltController.create)
    // READ ALL
    app.get("/api/recipes", BeltController.allRecipes)
    // READ ONE
    app.get("/api/recipes/:recipe_id", BeltController.oneRecipe)
    // UPDATE
    app.put("/api/recipes/:recipe_id", BeltController.updateRecipe)
    // DELETE
    app.delete("/api/recipes/:recipe_id", BeltController.deleteRecipe)
}