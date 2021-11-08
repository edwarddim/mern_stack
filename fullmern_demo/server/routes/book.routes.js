const BookController = require("../controllers/book.controllers")


module.exports = app => {
    app.get("/api/test", BookController.test)
    // CREATE
    app.post("/api/books/new", BookController.createBook)
    // READ
    app.get("/api/books", BookController.allBooks)
    // UPDATE
    // DELETE
}