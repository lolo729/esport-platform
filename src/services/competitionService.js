import api from "./axiosInstance";

const competitionService = {
  getAll: () => api.get("/api/competitions"),
  getById: (id) => api.get(`/api/competitions/${id}`),
  create: (d) => api.post("/api/competitions", d),
  join: (id) => api.post(`/api/competitions/${id}/join`),
  delete: (id) => api.delete(`/api/competitions/${id}`),
};

export default competitionService;
