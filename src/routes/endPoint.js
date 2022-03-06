module.exports = app => {
    const methods = require("../controllers/controller.js");
    const router = require("express").Router();
    // Create a new book
    router.post("/books", methods.createBook);
    // Get all books
    router.get("/books", methods.findAllBooks);
    // Get book by isbn
    router.get("/books/:isbn", methods.findByIsbn);
    // Update a book with isbn
    router.patch("/books/:isbn", methods.updateBook);
    // Delete a book with isbn
    router.delete("/books/:isbn", methods.deleteBook);
    // Delete all books
    router.delete("/books", methods.deleteAllBooks);
    app.use('/', router);
};