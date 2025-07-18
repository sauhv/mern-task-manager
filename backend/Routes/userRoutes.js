const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const {
  getUsers,
  getUserById,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", protect, adminOnly, getUsers); // Get all users (Admin only)
router.get("/:id", protect, adminOnly, getUserById); // Get a specific user
router.delete("/:id", protect, adminOnly, deleteUser); // Delete user (Admin only)

module.exports = router;
