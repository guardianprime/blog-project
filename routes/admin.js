const express = require("express");
const {
  getAdminDashboard,
  getLoginPage,
  getEditPage,
  getNewPage,
} = require("../controllers/adminController");

const {
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");

const adminRouter = express.Router();

adminRouter.get("/", getAdminDashboard);

adminRouter.get("/login", getLoginPage);

adminRouter.get("/edit/:id", getEditPage);

adminRouter.get("/new", getNewPage);

adminRouter.post("/new", createPost);

adminRouter.post("/edit/:id", updatePost);

adminRouter.delete("/delete/:id", deletePost);

module.exports = adminRouter;
