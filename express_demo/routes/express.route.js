// IMPORT THE CONTROLLER
const ExpressController = require("../controllers/express.controller")


// DEFINE THE ROUTES
module.exports = app => {
    app.get("/api/hello", ExpressController.hello),
    app.get("/api/recipes/:recipe_id", ExpressController.recipeMethod)
    app.get("/api/faker", ExpressController.fakerMethod)
}