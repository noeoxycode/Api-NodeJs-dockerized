const Book = require("../models/models.js");
const DataControl = require("./dataControl");

exports.createBook = (req, res) => {

// Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    /*if(dataControl())
    CONTROLE SIZE
    controle extenisonde fichier image
    pour create and put
    controle isbn
    message d erreur en json tableau ajout de msg au fur et a mesure*/
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
        /*const controlledData = DataControl.dataControl();
        if(controlledData.isOk !== true)
            res.status(422).send({
                message:
                    controlledData.res,
            });*/
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the book."
            });
        else res.status(201).send(data);
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
        else res.status(200).send(data)
    });
}

exports.findByIsbn = (req, res) => {
    Book.findByIsbn(req.params.isbn, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found book with isbn ${req.params.isbn}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving book with id " + req.params.isbn
                });
            }
        } else res.status(200).send(data);
    });
}

exports.updateBook = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Book.updateBook(
        req.params.isbn,
        new Book(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found book with isbn ${req.params.isbn}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating book with isbn " + req.params.isbn
                    });
                }
            } else res.status(200).send(data);
        }
    );
}

exports.deleteBook = (req, res) => {
    Book.remove(req.params.isbn, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found book with id ${req.params.isbn}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Book with id " + req.params.isbn
                });
            }
        } else res.status(204).send({ message: `Book was deleted successfully!` });
    });
}

exports.deleteAllBooks = (req, res) => {
    Book.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all books."
            });
        else res.send({ message: `All books were deleted successfully!` });
    });
}