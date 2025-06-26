require("dotenv").config(); // package đọc biến từ .env
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors"); // package để xử lý cors
const path = require("path"); // Path để xử lý đường dẫn

// import routes
const authRoute = require("./Routes/authRoutes");
const userRoute = require("./Routes/userRoutes");
const taskRoute = require("./Routes/taskRoutes");
const reportRoute = require("./Routes/reportRoutes");

const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect to Database
connectDB();

// Config để lấy dữ liệu từ form
app.use(express.json()); // Middleware để parse JSON (nếu form gửi dữ liệu JSON)
app.use(express.urlencoded({ extended: true })); // Use req.body - Middleware để parse dữ liệu form

// Use Routes
app.get("/", (req, res) => {
  res.send("Task Manager Project");
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);
// app.use("/api/reports", reportRoute);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
