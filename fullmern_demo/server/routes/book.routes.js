const BookController = require("../controllers/book.controllers")

module.exports = app => {
    app.get("/api/test", BookController.test)
    // CREATE
    app.post("/api/books/new", BookController.createBook)
    // READ
    app.get("/api/books", BookController.allBooks)
    app.get("/api/books/:book_id", BookController.oneBook)
    // UPDATE
    app.put("/api/books/:book_id", BookController.updateBook)
    // DELETE
    app.delete("/api/books/:book_id", BookController.deleteBook)
}