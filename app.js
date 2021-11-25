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

/* SERVING STATICS FILES (CSS) */
app.use("/public", express.static(path.join(__dirname, "public")));

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

/* HOME PAGE: LIST ALL THE FULL NAMES AVAILABLE*/
app.get("/address-book/index", async (req, res) => {
  const allInfo = await AddressBook.find({});

  res.render("address-book/index", { allInfo });
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
  res.redirect(`address-book/${newInfo._id}`);
});

/* ADDRESS DETAILS */
app.get("/address-book/:id", async (req, res, next) => {
  const detailedInfo = await AddressBook.findById(req.params.id);

  res.render("address-book/details", { detailedInfo });
});

/* UPDATE EXISTING ADDRESS */
app.get("/address-book/:id/update", async (req, res, next) => {
  const updateInfo = await AddressBook.findById(req.params.id);
  res.render("address-book/update", { updateInfo });
});

/* WRITE UPDATE TO DATABASE (FIND AND UPDATE) */
app.put("/address-book/:id", async (req, res, next) => {
  const { id } = req.params;
  const updateInfo = await AddressBook.findByIdAndUpdate(id, {
    ...req.body.addressdb,
  });

  res.redirect(`/address-book/${updateInfo._id}`);
});

/* DELETES INFORMATION FROM THE DATABASE (FIND AND DELETE) */
app.delete("/address-book/:id", async (req, res, next) => {
  const { id } = req.params;
  const deleteInfo = await AddressBook.findByIdAndDelete(id);

  res.redirect("/address-book/index");
});

/* LOCALHOST LISTENING PORT */
app.listen(3000, (req, res) => {
  console.log("Localhost Port 3000 Running Successfully");
});
