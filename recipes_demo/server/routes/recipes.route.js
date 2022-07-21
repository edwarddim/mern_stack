const RecipeController = require("../controllers/recipe.controller")

module.exports = app => {
    app.get("/api/test", RecipeController.test)
    app.post("/api/recipes/new", RecipeController.create),
    app.get("/api/recipes", RecipeController.allRecipes),
    app.get("/api/recipes/:recipe_id", RecipeController.oneRecipe),
    app.put("/api/recipes/:recipe_id", RecipeController.updateRecipe),
    app.delete("/api/recipes/:recipe_id", RecipeController.deleteRecipe)
}

