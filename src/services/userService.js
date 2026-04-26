import api from "./axiosInstance";

const userService = {
  getProfile: () => api.get("/api/users/me"),
};

export default userService;
