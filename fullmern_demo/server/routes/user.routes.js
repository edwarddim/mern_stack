// IMPORT CONTROLLER
const userController = require("../controllers/user.controllers")

module.exports = (app) => {
    app.post("/api/users", userController.createUser)
    app.get("/api/users", userController.getAllUsers)
    app.get("/api/users/:user_id", userController.getOneUser)
    app.put("/api/users/:user_id", userController.updateUser)
    app.delete("/api/users/:user_id", userController.deleteUser)
}