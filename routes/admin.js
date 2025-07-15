const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/", adminController.getAdminDashboard);

adminRouter.get("/login", adminController.getLoginPage);

adminRouter.get("/update", adminController.getUpdatePage);

adminRouter.get("/new", adminController.getNewPage);

module.exports = adminRouter;
