const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: "mysql",
    user: "nono",
    password: "nono",
    database: "library",
    //can connect from client that is not human
    insecureAuth: true
});
// open the MySQL connection
connection.connect(error => {
    console.log(dbConfig);
    if (error) throw error;
    console.log("Connected to the database.");
});
module.exports = connection;