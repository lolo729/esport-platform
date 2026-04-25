import api from "./axiosInstance";

const rankingService = {
  getGlobal:        ()   => api.get("/api/ranking/global"),
  getByCompetition: (id) => api.get(`/api/ranking/competition/${id}`),
};

export default rankingService;