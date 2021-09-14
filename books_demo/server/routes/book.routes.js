const BookController = require("../controllers/book.controllers")


module.exports = app => {
    app.get("/api/books/test", BookController.test),
    app.post("/api/books", BookController.newBook),
    app.get("/api/books", BookController.allBooks),
    app.get("/api/books/:id", BookController.oneBook),
    app.put("/api/books/:id", BookController.updateBook),
    app.delete("/api/books/:id", BookController.deleteBook)
}