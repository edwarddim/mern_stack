const Controller = require("../controllers/message.controllers")

module.exports = app => {
    app.get("/api/test", Controller.test),

    // ROUTES FOR MESSAGES
    app.get("/api/messages", Controller.allMessages),
    app.post("/api/messages", Controller.createMessage),
    app.delete("/api/messages/:id", Controller.deleteMessage),
    // ROUTES FOR COMMENTS
    app.get("/api/comments/:comment_id", Controller.findComment),
    app.post("/api/comments/:message_id", Controller.createComment),
    app.put("/api/comments/:comment_id", Controller.editComment),
    app.delete("/api/comments/:comment_id", Controller.deleteComment)
}