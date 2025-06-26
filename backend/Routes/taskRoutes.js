const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  getTasks,
  getDashboardData,
  getUserDashboardData,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskCheckList,
} = require("../controllers/taskController");
const router = express.Router();

router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);

// CURD
router.get("/", protect, getTasks); // Get all task (Amin: all, User: assigned)
router.get("/:id", protect, getTaskById); // Get Task By Id
router.post("/", protect, adminOnly, createTask); // Create a task (Admin only)
router.put("/:id", protect, updateTask); // Update task details
router.delete("/:id", protect, adminOnly, deleteTask); // Delete a task (Admin only)

router.put("/:id/status", protect, updateTaskStatus); // Update task status
router.put("/:id/todo", protect, updateTaskCheckList); // Update task checklist

module.exports = router;
