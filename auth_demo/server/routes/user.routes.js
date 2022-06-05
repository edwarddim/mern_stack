const UserController = require("../controllers/user.controller")
const AsyncController = require("../controllers/async_user.controller")

const {authenticate} = require("../config/jwt.config")

// module.exports = app => {
//     app.post("/api/users/register", UserController.register),
//     app.post("/api/users/login", UserController.login),
//     app.get("/api/users/logout", UserController.logout),
//     // ROUTES BELOW ARE PROTRECTED
//     app.get("/api/users", authenticate , UserController.allUsers),
// }

module.exports = app => {
    app.post("/api/users/register", AsyncController.register)
    app.post("/api/users/login", AsyncController.login),
    app.get("/api/users", authenticate , AsyncController.allUsers)

}