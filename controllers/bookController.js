const Book = require("../models/Book");

exports.getAll = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.add = async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
};

exports.update = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(book);
};

exports.delete = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// Tìm kiếm sách theo title hoặc author
exports.search = async (req, res) => {
  const { q } = req.query;

  try {
    const books = await Book.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { author: { $regex: q, $options: "i" } },
      ],
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};
