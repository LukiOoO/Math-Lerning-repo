import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    Authorization: `JWT ${localStorage.getItem("token")}`,
  },
});

export default api;
