const TestController = require("../controllers/test.controllers")

module.exports = app => {
    app.get("/api", TestController.getUser)
    app.post("/api", TestController.createUser)
    app.put("/api", TestController.updateUser)
    app.delete("/api", TestController.deleteRequest)
    app.get("/api/:user_id", TestController.paramRequest)
}
