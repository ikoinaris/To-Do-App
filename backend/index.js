const express = require("express");
const app = express();
const toDoRoutes = require("./routes/toDoRoutes");
const PORT = 3030;

app.use("/todo", toDoRoutes);

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})