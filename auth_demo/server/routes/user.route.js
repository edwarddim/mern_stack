const User = require("../controllers/user.controller")

const {authenticate} = require("../config/jwt.config")

module.exports = app => {
    app.get("/api/test", User.test)
    app.post("/api/user/register", User.register)
    app.post("/api/user/login", User.login)
    app.get("/api/users", authenticate ,User.allUsers)
}