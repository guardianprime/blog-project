const express = require("express");

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.render("index");
});

postRouter.get("/article", (req, res) => {
  res.render("article");
});

module.exports = postRouter;
