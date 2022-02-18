const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

// simple route
app.get("/", (req, res) => {
    res.json({ message: "First endPoint" });
});
require("./routes/endPoint.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
require("./routes/endPoint.js")(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});