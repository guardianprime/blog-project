const express = require("express");

const postRouter = express.Router();

const {
  createPost,
  getPostById,
  deletePost,
  updatePost,
} = require("../controllers/postsController");

postRouter.get("/home", (req, res) => {
  res.render("index", { posts: [] });
});

postRouter.get("/article", (req, res) => {
  res.render("article");
});

module.exports = postRouter;
