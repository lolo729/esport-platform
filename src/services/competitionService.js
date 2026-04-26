import api from "./axiosInstance";

const competitionService = {
  getAll: () => api.get("/api/competitions"),
  join: (id) => api.post(`/api/competitions/${id}/join`),
  delete: (id) => api.delete(`/api/competitions/${id}`),
};

export default competitionService;
