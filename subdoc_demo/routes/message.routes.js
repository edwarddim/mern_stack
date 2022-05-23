const Controller = require("../controllers/message.controllers")


module.exports = app => {
    // ROUTES FOR MESSAGES
    app.get("/api/messages", Controller.allMessages),
    app.post("/api/messages", Controller.createMessage),
    app.delete("/api/messages/:id", Controller.deleteMessage)

    // ROUTES FOR COMMENTS
    app.post("/api/comments/:message_id", Controller.createComment)
    app.put("/api/comments/:comment_id", Controller.editComment)
    app.delete("/api/comments/:comment_id", Controller.deleteComment)
}