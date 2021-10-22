const express = require("express");
const mongoose = require("mongoose")
const app = express();
const toDoRoutes = require("./routes/toDoRoutes");
const PORT = 3030;
const uri = "mongodb://localhost/todoList";
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());

mongoose.connect(uri, connectionOptions)
    .then(() => {
        console.log("Connection to Database established!");
    })
    .catch((err) => console.error(err));

app.use("/todos", toDoRoutes);

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})