const CatController = require("../controllers/cat.controller")

module.exports = app => {
    app.get("/api/test", CatController.test)
    app.get("/api/cats", CatController.allCats)
    app.post("/api/cats", CatController.createCat)
}