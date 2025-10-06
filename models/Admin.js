const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: String,
  password: String, // Đã mã hoá bằng bcrypt
});

module.exports = mongoose.model("Admin", adminSchema);
