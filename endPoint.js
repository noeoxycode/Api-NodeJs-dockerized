const express = require('express')
const app = express()
const book = require("controller.js")


app.get("/", book.getAll());

app.get('/book/:isbn', book.getByIsbn);

app.post('/books', book.createBook);
/*
router.get('books/:isbn', books.findBooksByIsbn);

router.post('books/createBooks', books.createBooks);

router.put('books/updateBooks', books.updateBooks);

router.delete('books/deleteBooks/:isbn', books.deleteBooks);*/