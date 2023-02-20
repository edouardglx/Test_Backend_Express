const express = require("express");
const formidableMiddleware = require("express-formidable");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(formidableMiddleware());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/To-do-list");

const newTaskRoute = require("./routes/newTask");
app.use(newTaskRoute);

const homeRoute = require("./routes/home");
app.use(homeRoute);

const deleteRoute = require("./routes/delete");
app.use(deleteRoute);

app.listen(3008, () => {
  console.log("Server has started");
  try {
  } catch (error) {
    res.status(400);
  }
});
