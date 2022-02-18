module.exports = app => {
    const methods = require("../controllers/controller.js");
    const router = require("express").Router();
    // Create a new book
    router.post("/newBook", methods.createBook);
    // Get all books
    router.get("/allBooks", methods.findAllBooks);
    // Get all read books
    router.get("/readBooks", methods.findAllReadBooks);
    // Get book by isbn
    router.get("/:isbn", methods.findOne);
    // Update a book with isbn
    router.put("/:isbn", methods.updateBook);
    // Delete a book with isbn
    router.delete("/:isbn", methods.deleteBook);
    // Delete all Tutorials
    router.delete("/deleteAllBooks", methods.deleteAllBooks);
};