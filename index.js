const express = require('express')
const app = express()
const con = require("./connectionDb")
var mysql = require('mysql');


const port = 3000;

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/foo', function (req, res){
    res.json({"coucou" : "ceci est un json"})
});

app.use(express.urlencoded({
    extended: true
}));

app.post('/bar', function (req, res){
    var body = req.body;
    console.log(req.body.foo);
    res.send(req.body.foo);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});