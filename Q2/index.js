const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const todoRoute = require("./routes/todo");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(todoRoute);
// app.use((req, res, next) => {
//   res.render("<h1> Page not found </h1>");
// });

mongoose
  .connect(
    "mongodb+srv://Zakria-Akram:fJ5WErdJDNdAryG5@cluster0.prblq8e.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
