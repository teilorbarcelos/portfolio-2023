import axios from "axios";

export const baseURL = "https://back-teilorwebdev.vercel.app/v1";

const api = axios.create({
  baseURL,
});

export default api;
