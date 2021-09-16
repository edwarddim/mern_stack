const MessageController = require("../controllers/message.controller")

module.exports = app => {
    app.get("/api/test", MessageController.test),

    // ROUTES FOR MESSAGES
    app.get("/api/messages", MessageController.allMessages),
    app.post("/api/messages", MessageController.createMessage),
    app.delete("/api/messages/:id", MessageController.deleteMessage),

    // ROUTES FOR COMMENTS
    app.get("/api/comments/:comment_id", MessageController.findComment),
    app.post("/api/comments/:message_id", MessageController.createComment),
    app.put("/api/comments/:comment_id", MessageController.editComment),
    app.delete("/api/comments/:comment_id", MessageController.deleteComment)
}