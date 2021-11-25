"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* DATABASE STRUCTURE */
const addressBookSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    min: 1111111111,
  },
  email: {
    type: String,
  },
  birthday: {
    type: String,
  },
});

module.exports = mongoose.model("AddressBook", addressBookSchema);
