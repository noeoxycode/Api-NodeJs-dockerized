const express = require('express')
const app = express()
const books

router.get('books', books.findBooks);

router.get('books/:isbn', books.findBooksByIsbn);

router.post('books/createBooks', books.createBooks);

router.put('books/updateBooks', books.updateBooks);

router.delete('books/deleteBooks/:isbn', books.deleteBooks);