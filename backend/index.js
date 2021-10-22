const express = require("express");
const mongoose = require("mongoose")
const app = express();
const toDoRoutes = require("./routes/toDoRoutes");
const PORT = 3030;

mongoose.connect("mongodb://localhost/todoList")
    .then(() => {
        console.log("Connection to Database established!");
    })
    .catch((err) => console.error(err));

app.use("/todo", toDoRoutes);

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})