const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const app = express();
// dotenv for hiding essential data
require("dotenv").config();

// public files
app.use("/public", express.static("public"));

// view engine
app.use(expressLayouts);
app.set("view engine", "ejs");

// setting body parser for form data
app.use(express.urlencoded({ extended: false }));

// MongDB
// database configuration
const db = process.env.MONGOURI || require("./config/connection").MONGOURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDb conected");
  })
  .catch((err) => console.log(err));

// routes
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening to port ${PORT}`));
