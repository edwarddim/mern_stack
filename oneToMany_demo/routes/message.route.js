const Controller = require("../controllers/message.controller")


module.exports = app => {
    // ROUTES FOR MESSAGES
    app.get("/api/messages", Controller.allMessages),
    app.post("/api/messages", Controller.createMessage),
    app.delete("/api/messages/:id", Controller.deleteMessage)

    // ROUTES FOR COMMENTS
    app.post("/api/comments/:message_id", Controller.createComment)
    app.post("/api/comments", Controller.asyncCreateComment)
    app.get("/api/comments/:comment_id", Controller.findCommentInMessage)
    app.put("/api/comments/:comment_id", Controller.updateComment)
}