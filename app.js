const express = require("express");
const app = express();
const morgan = require("morgan");
const CORS = require("./cors");
const port = 3000;
const api = require("./api/root");

app.use(morgan("combined"));
app.use(CORS);
 
app.use("/api", api);

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