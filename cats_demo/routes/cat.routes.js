// IMPORT MY CONTROLLER
const CatController = require("../controllers/cat.controllers")

module.exports = app => {
    app.get("/api/test", CatController.test)
    // CREATE
    app.post("/api/cats", CatController.createCat)
    // READ
    app.get("/api/cats", CatController.allCats)
    app.get("/api/cats/:cat_id", CatController.oneCat)
    // UPDATE
    app.put("/api/cats/:cat_id", CatController.updateCat)
    // DELETE
    app.delete("/api/cats/:cat_id", CatController.deleteCat)
}