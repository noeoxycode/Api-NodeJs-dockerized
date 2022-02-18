var mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

module.exports = con;