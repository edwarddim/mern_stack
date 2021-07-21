const BookController = require("../controllers/book.controller")

module.exports = app => {
    app.get("/api/test", BookController.test)
    // --------- READ ALL BOOKS----------------//
    app.get("/api/books", BookController.allBooks)

    // --------- CREATE --------------//
    app.post("/api/books/new", BookController.createBook)

    // --------- READ ONE BOOK------------//
    app.get("/api/books/:book_id", BookController.oneBook)

    // --------- UPDATE --------------//
    app.put("/api/books/:book_id", BookController.updateBook)
    // --------- DELETE --------------//
    app.delete("/api/books/:book_id", BookController.deleteBook)
}
