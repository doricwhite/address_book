"use strict";

//Node Module Requirements
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const AddressBook = require("./model/address-book-db");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/**Method-overide to post information from form to mongo database */
app.use(methodOverride("_method"));

/**MONGOOSE CONNECTION TO MONGO LOCAL DATABASE */
mongoose.connect("mongodb://localhost:27017/addressBookDB", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "Error Connecting to addressBook DB")
);
db.once("open", () => {
  console.log("Connection to addressBook DB Successful");
});

//HOME PAGE
app.get("/address-book/index", (req, res) => {
  res.render("address-book/index");
});

//ADD AN ADDRESS
app.get("/address-book/add_address", (req, res) => {
  res.render("address-book/add_address");
});

app.listen(3000, (req, res) => {
  console.log("Runnging port running successfully");
});
