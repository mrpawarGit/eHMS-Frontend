import axios from "axios";

// Create instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend Node.js port
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor: Attach Token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
