import api from "./axiosInstance";

const userService = {
  // 👤 Récupérer le profil connecté
  getProfile: () => api.get("/api/users/me"),

  // 📊 Récupérer les stats du joueur connecté
  getMyStats: () => api.get("/api/users/me/stats"),
};

export default userService;
