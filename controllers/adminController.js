const postModel = require("../models/posts");

function getAdminDashboard(req, res) {
  res.render("admin"); // Render the admin dashboard
}

function getLoginPage(req, res) {
  res.render("login"); // Render the login page
}

function getUpdatePage(req, res) {
  res.render("update"); // Render the update page
}

function getNewPage(req, res) {
  res.render("new"); // Render the new item page
}

module.exports = {
  getAdminDashboard,
  getLoginPage,
  getUpdatePage,
  getNewPage,
};
