const express = require("express");
const app = express.Router();

let toDos = [];

app.get("/", (req, res) => {
    res.json(toDos);
} ); 

module.exports = app;