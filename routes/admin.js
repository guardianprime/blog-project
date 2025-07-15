const express = require("express");
const {
  getAdminDashboard,
  getLoginPage,
  getUpdatePage,
  getNewPage,
} = require("../controllers/adminController");

const adminRouter = express.Router();

adminRouter.get("/", getAdminDashboard);

adminRouter.get("/login", getLoginPage);

adminRouter.get("/update", getUpdatePage);

adminRouter.get("/new", getNewPage);

module.exports = adminRouter;
