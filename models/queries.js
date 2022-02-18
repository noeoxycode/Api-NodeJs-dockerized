const sql = require("../config/connectionDb");

const Book = function (book) {
    this.isbn = book.isbn;
    this.title = book.title;
    this.author = book.author;
    this.overview = book.overview;
    this.picture = book.picture;
    this.read_count = book.read_count;
};


Book.getAll = (title, result) => {
    let query = "SELECT * FROM book";
    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Book: ", res);
        result(null, res);
    });
};

Book.getByIsbn = (isbn, result) => {
    sql.query(`SELECT * FROM Book WHERE id = ${isbn}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Books finded : ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Tutorial with the isbn
        result({ kind: "There is no book with this ISBN" }, null);
    });
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

https://www.bezkoder.com/node-js-rest-api-express-mysql/