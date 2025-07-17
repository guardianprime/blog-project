const express = require("express");
const postModel = require("../models/posts");
const postRouter = express.Router();

postRouter.get("/home", async (req, res) => {
  const posts = await postModel.find();
  res.render("index", { posts });
});

postRouter.get("/article/:id", async (req, res) => {
  const post = await postModel.findById(req.params.id);
  if (!post) {
    return res.status(404).render("404", { title: "Post Not Found" });
  }

  res.status(200).render("article", { post });
});

module.exports = postRouter;
