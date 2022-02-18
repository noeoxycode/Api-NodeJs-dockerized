module.exports = app => {
    const methods = require("../controllers/controller.js");
    const router = require("express").Router();
    // Create a new book
    router.post("/newBook", methods.createBook);
    // Get all books
    router.get("/books", methods.findAllBooks);
    // Get book by isbn
    router.get("/books/:isbn", methods.findByIsbn);
    // Update a book with isbn
    router.put("/:isbn", methods.updateBook);
    // Delete a book with isbn
    router.delete("/:isbn", methods.deleteBook);
    // Delete all Tutorials
    router.delete("/deleteAllBooks", methods.deleteAllBooks);
    app.use('/api/books', router);
};