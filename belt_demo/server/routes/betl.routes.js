const BeltController = require("../controllers/belt.controllers")

module.exports = app => {
    app.get("/api/test", BeltController.test)
    // CREATE
    app.post("/api/users/new", BeltController.createUser)
    // READ
    app.get("/api/users", BeltController.getAllUsers)
    app.get("/api/users/:id", BeltController.getOneUser)
    // UPDATE
    app.put("/api/users/:id", BeltController.updateUser)
    // DELETE
    app.delete("/api/users/:id", BeltController.deleteUser)
}