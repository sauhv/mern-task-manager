import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptoror
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Reponse Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors globally
    if (error.response) {
      const isOnLoginPage = window.location.pathname === "/login";

      if (error.response.status === 401 && !isOnLoginPage) {
        //Redirect to login page
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        console.log("Server error. Please try again.");
      }
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
