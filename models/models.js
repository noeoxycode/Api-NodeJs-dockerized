const sql = require("./db.js");

// constructor
const Book = function (book) {
    this.isbn = book.isbn;
    this.title = book.title;
    this.author = book.author;
    this.overview = book.overview;
    this.picture = book.picture;
    this.read_count = book.read_count;
};
Book.createBook = (newBook, result) => {
    sql.query("INSERT INTO Book SET ?", newBook, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created book: ", { isbn: res.isbn,  title: res.title, author: res.author, overview: res.overview, picture: res.picture, read_count: res.read_count});
        result(null, { isbn: res.isbn,  title: res.title, author: res.author, overview: res.overview, picture: res.picture, read_count: res.read_count });
    });
};
module.exports = Book;