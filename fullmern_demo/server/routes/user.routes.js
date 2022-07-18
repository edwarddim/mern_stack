// IMPORT CONTROLLER
const userController = require("../controllers/user.controllers")

module.exports = (app) => {
    app.post("/api/users", userController.createUser)
    app.get("/api/users", userController.getAllUsers)
}