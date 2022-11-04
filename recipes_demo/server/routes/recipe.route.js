const RecipeController = require("../controllers/recipe.controller")

module.exports = app => {
    // CREATE
    app.post("/api/recipes", RecipeController.createRecipe)
    // READ ALL
    app.get("/api/recipes", RecipeController.allRecipes)
    // READ ONE
    app.get("/api/recipes/:recipe_id", RecipeController.oneRecipe)
    // UPDATE
    app.put("/api/recipes/:recipe_id", RecipeController.updateRecipe)
    // DELETE
    app.delete("/api/recipes/:recipe_id", RecipeController.deleteRecipe)
}