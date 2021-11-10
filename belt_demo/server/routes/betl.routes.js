const BeltController = require("../controllers/belt.controllers")

module.exports = app => {
    app.get("/api/test", BeltController.test)
    app.post("/api/users/new", BeltController.createUser)
    app.get("/api/users", BeltController.getAllUsers)
}