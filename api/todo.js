const express = require("express");
const app = express.Router();

let toDos = [];

app.get("/", (req, res) => {
    res.json(toDos);
} ); 
app.get("/:toDoId", (req, res) => {
    const { toDoId } = req.params;
    if (toDos[+toDoId]) {
        res.json(toDos[+toDoId]);
} else {
    res.status(404).json("todo item not found!");
}
});

app.post("/", express.json(), (req, res) => {
    if(typeof req.body.text !== "undefined"){
        if(toDos.indexOf(req.body.text) > -1) {
            res.status(409).json("already exists");
        } else {
        toDos.push(req.body.text);
        }
        res.status(201).json(toDos.length - 1);
    } else {
        res.status(400).json("You have to enter text.");
    }
});

app.put("/:toDoId", express.json(), (req, res) => {
    const { toDoId } = req.params;
    if (toDos[+toDoId]) {
        if(typeof req.body.text !== "undefined") {
        toDos[+toDoId] = req.body.text;
        res.status(202).json(toDos[+toDoId]);
}  else {
    res.status(400).json("You have to enter text.");
} }
else {
    res.status(404).json("item not found!");
}
});
app.delete("/:toDoId", (req, res) => {
    const { toDoId } = req.params;
    if (toDos[+toDoId]) {
        toDos[+toDoId] = null;
        res.status(204).json("");
    }  
    else {
    res.status(404).json("todo item not found!");   
    }
});

module.exports = app;