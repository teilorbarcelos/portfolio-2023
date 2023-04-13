import axios from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://backend.example.com/api";

const api = axios.create({
  baseURL,
});

export default api;
