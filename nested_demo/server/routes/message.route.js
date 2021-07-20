const MessageController = require("../controllers/message.controller")

module.exports = app => {
    app.get("/api/test", MessageController.test)
    app.get("/api/messages", MessageController.allMessages)
    app.post("/api/messages", MessageController.createMessage)
    app.post("/api/comments/:message_id", MessageController.createComment)
}