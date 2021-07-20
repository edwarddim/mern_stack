const BookController = require("../controllers/book.controller")

module.exports = app => {
    app.get("/api/test", BookController.test)
    app.post("/api/books/new", BookController.createBook)
}
