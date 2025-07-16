const posts = require("../models/posts");

async function getAllPosts(req, res) {
  // Logic to fetch all posts from the database
  const allPosts = await posts.find({});
  res.json(allPosts);
}

async function getPostById(req, res) {
  const postID = req.params.id;
  const post = await posts.findById(postID);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
}

async function createPost(req, res) {
  const newPost = req.body;
  await posts.create(newPost);
  res.status(201).json(newPost);
}

async function updatePost(req, res) {
  const { id } = req.params;
  const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedPost) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(updatedPost);
}

async function deletePost(req, res) {
  const { id } = req.params;
  const deletedPost = await Post.findByIdAndDelete(id);
  if (!deletedPost) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(204).send();
}

module.exports = {
  deletePost,
  updatePost,
  createPost,
  getAllPosts,
  getPostById,
};
