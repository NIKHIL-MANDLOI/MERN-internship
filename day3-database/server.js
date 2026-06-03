const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://nikhil:nikhil12345@cluster0.f5llswk.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("Server Running");
});

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);