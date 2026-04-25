import api from "./axiosInstance";

const gameService = {
  getAll:   ()         => api.get("/api/games"),
  getById:  (id)       => api.get(`/api/games/${id}`),
  create:   (data)     => api.post("/api/games", data),
  update:   (id, data) => api.put(`/api/games/${id}`, data),
  delete:   (id)       => api.delete(`/api/games/${id}`),
};

export default gameService;