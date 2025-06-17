import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Users/UserDashboard";
import ManagerTasks from "./pages/Admin/ManagerTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManagerUsers";

import UserDashboard from "./pages/Users/UserDashboard";
import MyTasks from "./pages/Users/MyTasks";
import ViewTaskDetails from "./pages/Users/ViewTaskDetails";

import PrivateRoute from "./Routes/PrivateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/** Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManagerTasks />} />
            <Route path="/admin/create-tasks" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          {/** User Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/tasks-details/:id" element={<ViewTaskDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
