const express = require("express");
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBookById,
} = require("../controllers/books.controllers");

const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);
BookRouter.get("/:id", getBookById);
BookRouter.post("/", createBook);
BookRouter.put("/:id", updateBook);
BookRouter.delete("/:id", deleteBookById);

module.exports = BookRouter;
