const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.render("admin"); // Render the admin dashboard
});

adminRouter.get("/login", (req, res) => {
  res.render("login"); // Render the login page
});
module.exports = adminRouter;
