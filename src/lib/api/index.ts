import axios from "axios";

const baseURL = "https://backend.example.com/api";

const api = axios.create({
  baseURL,
});

export default api;
