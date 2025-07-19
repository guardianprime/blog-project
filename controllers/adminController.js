const postModel = require("../models/posts");

async function getAdminDashboard(req, res) {
  const posts = await postModel.find(); // Fetch all posts from the model
  res.render("admin", { posts: posts }); // Render the admin dashboard with posts
}

async function getEditPage(req, res) {
  // Fetch the post by ID from the model
  const post = await postModel.findById(req.params.id);
  res.render("edit", { post }); // Render the edit page
}

function getNewPage(req, res) {
  res.render("new"); // Render the new item page
}

module.exports = {
  getAdminDashboard,
  getEditPage,
  getNewPage,
};
