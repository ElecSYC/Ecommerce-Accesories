const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
    console.log("Server funcionando en el puerto 4000");
    db();
})

module.exports = app;