const TestController = require("../controllers/test.controllers")


module.exports = app => {
    app.get("/api", TestController.getRequest)
    app.post("/api", TestController.postRequest)
    app.put("/api", TestController.putRequest)
    app.delete("/api", TestController.deleteRequest)
    app.get("/api/:user_id", TestController.paramRequest)
}