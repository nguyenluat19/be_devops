// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  reading: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("User", userSchema);
