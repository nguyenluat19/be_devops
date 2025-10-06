const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    category: String,
    cover: String,
    description: String,
    tags: [String],
    pages: Number,
    reads: Number,
    likes: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
