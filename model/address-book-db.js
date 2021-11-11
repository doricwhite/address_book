"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  birthday: {
    type: String,
  },
});

module.exports = mongoose.model("AddressBook", addressBookSchema);
