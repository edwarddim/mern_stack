const FruitController = require("../controllers/fruit.controller")
const Fruit = require("../models/fruit.model")

module.exports = app => {
    // CREATE
    app.post("/api/fruits", FruitController.createFruit)
    // READ ALL
    app.get("/api/fruits", FruitController.allFruits)
    // READ ONE
    app.get("/api/fruits/:fruit_id", FruitController.oneFruit)
    // UPDATE
    app.put("/api/fruits/:fruit_id", FruitController.updateFruit)
    // DELETE
    app.delete("/api/fruits/:fruit_id", FruitController.deleteFruit)
}