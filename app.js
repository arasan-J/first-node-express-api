const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json("welcome to API server!");
   
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});