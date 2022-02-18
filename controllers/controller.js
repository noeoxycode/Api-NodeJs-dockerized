const Book = require("../models/models.js");

exports.createBook = (req, res) => {
// Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Book
    const book = new Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        overview: req.body.overview,
        picture: req.body.picture || false,
        read_count: req.body.read_count,
    });
    // Save Book in the database
    Book.createBook(book, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the book."
            });
        else res.send(data);
    });
}

exports.findAllBooks = (req, res) => {
    const title = req.query.title;
    Book.getAll(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving book."
            });
        else res.send(data);
    });
}

exports.findAllReadBooks = (req, res) => {

}

exports.findOne = (req, res) => {

}

exports.updateBook = (req, res) => {

}

exports.deleteBook = (req, res) => {

}

exports.deleteAllBooks = (req, res) => {

}