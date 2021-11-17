"use strict";

//Node Module Requirements
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const AddressBook = require("./model/addressdb");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

/* METHOD OVERIDE TO PERFORM ACTIVITIES OTHER THAN "POST" WHEN USING A FORM */
app.use(methodOverride("_method"));

/* MONGOOSE CONNECTION TO MONGO LOCAL DATABASE */
mongoose.connect("mongodb://localhost:27017/addressBookDB", {
  useNewUrlParser: true,
});

/* SHOWS SUCCESSFUL CONNECTION OR ERROR WHEN CONNECTING TO THE MONGODB */
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

/* THIS WAS USE TO TEST WRITING INFORMATION TO THE DATABASE
app.get("/address-book/add_address", async (req, res) => {
  const info = new AddressBook({
    firstName: "Doric",
    lastName: "White",
    address: "The Unknown, Kingston, Jamaica",
    phoneNumber: "8765555555",
    email: "doricwhite@gmail.com",
    birthday: "12/12/1999",
  });

   await info.save();
   res.send(info);
});
/*

/* ADD CONTACT INFO PAGE */
app.get("/address-book/add_address", (req, res) => {
  res.render("address-book/add_address");
});

/* ADD INFO TO MONGODB VIA FORM */
app.post("/address-book", async (req, res) => {
  const newInfo = new AddressBook(req.body.addressdb);
  await newInfo.save();

  res.render("address-book/index");
});

/* LOCALHOST LISTENING PORT */
app.listen(3000, (req, res) => {
  console.log("Runnging port running successfully");
});
