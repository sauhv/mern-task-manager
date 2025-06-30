const express = require("express");

const router = express.Router();

const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  exportTasksReport,
  exportUsersReport,
} = require("../controllers/reportController");

router.get("/export/tasks", protect, adminOnly, exportTasksReport); // export tasks all report
router.get("/export/users", protect, adminOnly, exportUsersReport); // export users-task report

module.exports = router;
