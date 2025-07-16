const postModel = require("../models/posts");
const { getAllPosts, getPostById } = require("./postsController");

async function getAdminDashboard(req, res) {
  const posts = await getAllPosts(req, res);
  res.render("admin", { posts }); // Render the admin dashboard with posts
}

function getLoginPage(req, res) {
  res.render("login"); // Render the login page
}

function getEditPage(req, res) {
  // Fetch the post by ID from the model
  const post = postModel.getPostById(req.params.id);
  res.render("edit", { post }); // Render the edit page
}

function getNewPage(req, res) {
  res.render("new"); // Render the new item page
}

module.exports = {
  getAdminDashboard,
  getLoginPage,
  getEditPage,
  getNewPage,
};
