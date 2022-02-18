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

Book.getAll = (title, result) => {
    let query = "SELECT title FROM Book";
    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("books: ", res);
        result(null, res);
    });
};

Book.findByIsbn = (isbn, result) => {
    sql.query(`SELECT * FROM Book WHERE isbn = ${isbn}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found tutorial: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

Book.updateBook = (isbn, book, result) => {
    sql.query(
        "UPDATE book SET title = ?, author = ?, overview = ?, picture = ?, read_count = ? WHERE isbn = ?",
        [book.title, book.author, book.overview, book.picture, book.read_count, isbn],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found book with the id
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated book: ", { isbn: res.isbn,  title: res.title, author: res.author, overview: res.overview, picture: res.picture, read_count: res.read_count});
            result(null, { isbn: res.isbn,  title: res.title, author: res.author, overview: res.overview, picture: res.picture, read_count: res.read_count });
        }
    );
};

module.exports = Book;