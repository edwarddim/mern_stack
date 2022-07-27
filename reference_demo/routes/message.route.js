const Controller = require("../controllers/message.controller")


module.exports = app => {
    // ROUTES FOR MESSAGES
    app.get("/api/messages", Controller.allMessages),
    app.post("/api/messages", Controller.createMessage),
    app.delete("/api/messages/:id", Controller.deleteMessage)

    app.post("/api/comments", Controller.createComment)
    app.get("/api/comments/:comment_id", Controller.getOneComment)
}