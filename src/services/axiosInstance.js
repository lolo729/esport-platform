import axios from "axios";

// ── Instance de base ──────────────────────────────────
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // Ton backend Spring
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 secondes avant timeout
});

// ── Intercepteur REQUEST : injecte le JWT ─────────────
axiosInstance.interceptors.request.use(
  (config) => {
    // Récupère le token depuis localStorage
    const token = localStorage.getItem("jwt_token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// ── Intercepteur RESPONSE : gère les erreurs ──────────
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401 = token expiré ou invalide → déconnexion
    if (error.response?.status === 401) {
      localStorage.removeItem("jwt_token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    // 403 = connecté mais pas le bon rôle
    if (error.response?.status === 403) {
      console.warn("Accès refusé - rôle insuffisant");
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
