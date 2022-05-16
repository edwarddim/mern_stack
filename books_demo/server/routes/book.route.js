const BookController = require("../controllers/book.controller")


module.exports = app => {
    app.get("/api/books/test", BookController.test),
    app.post("/api/books/new", BookController.create),
    app.get("/api/books", BookController.allBooks)
}