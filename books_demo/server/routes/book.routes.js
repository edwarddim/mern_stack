const BookController = require("../controllers/book.controller")

module.exports = app => {
    app.get("/api/test", BookController.test)
    // --------- READ ----------------//
    app.get("/api/books", BookController.allBooks)
    
    // --------- CREATE --------------//
    app.post("/api/books/new", BookController.createBook)

}
