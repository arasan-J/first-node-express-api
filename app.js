const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json("welcome to API server!");
    if(req.headers["user-agent"].toLowerCase().indexOf("postman") > -1){
        resp = "Hello Developer"
    }
    res.json(resp);
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});