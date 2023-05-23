const express = require("express");
const connect = require("./src/utils/connect");
require("dotenv").config();

const PORT = process.env.PORT;

const server = express();
connect();

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

const BookRouter = require("./src/api/routes/books.routes");
server.use("/api/books", BookRouter);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  return next(error);
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT} 🚀`);
});
