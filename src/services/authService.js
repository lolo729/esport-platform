import api from "./axiosInstance";

const authService = {
  register: (data) => api.post("/api/auth/register", data),
  login:    (data) => api.post("/api/auth/login", data),
};

export default authService;