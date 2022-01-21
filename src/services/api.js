import axios from "axios";

const baseUrl = "http://10.0.2.2:4000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
