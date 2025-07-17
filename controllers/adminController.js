const postModel = require("../models/posts");

async function getAdminDashboard(req, res) {
  const posts = await postModel.find();
  res.render("admin", { posts: posts }); // Render the admin dashboard with posts
}

function getLoginPage(req, res) {
  res.render("login"); // Render the login page
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
  getLoginPage,
  getEditPage,
  getNewPage,
};
