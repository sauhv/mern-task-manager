const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @desc   Get all users (Admin only)
// @route  GET /api/users/
// @access Private (Admin)
const getUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "number" }).select("-password");

    // Add task counts to each user
    const usersWithTaskCount = await Promise.all(
      users.map(async (user) => {
        const pendingTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: "Pending",
        });
        const inProgressTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: "Inprogress",
        });
        const completedTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "Completed",
        });

        return {
          ...user._doc, // Include all existing user data
          pendingTasks,
          inProgressTasks,
          completedTask,
        };
      })
    );

    res.status(200).json(usersWithTaskCount);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Get user by ID
// @route  GET /api/users/:id
// @access Private
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Delete a user (Admin only)
// @route  GET /api/users/:id
// @access Private (Admin)
const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  deleteUser,
};
