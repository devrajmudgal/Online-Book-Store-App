const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  bookdescription: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
  },
});

const books = mongoose.model("books", bookSchema);

module.exports = books;
