const Controller = require("../controllers/message.controller")


module.exports = app => {
    // ROUTES FOR MESSAGES
    app.get("/api/messages", Controller.allMessages),
    app.post("/api/messages", Controller.createMessage),
    app.get("/api/messages/:message_id", Controller.oneMessageAsync)
    app.delete("/api/messages/:id", Controller.deleteMessage)

    // ROUTES FOR COMMENTS
    app.post("/api/comments/:message_id", Controller.createComment)
}