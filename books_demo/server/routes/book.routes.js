const BookController = require("../controllers/book.controllers")


module.exports = app => {
    app.get("/api/books/test", BookController.test),
    app.post("/api/books", BookController.newBook)
}