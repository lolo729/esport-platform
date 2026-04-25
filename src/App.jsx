import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import CompetitionPage from "./pages/CompetitionPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/competitions" element={<CompetitionPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />

        {/* Routes protégées (USER connecté) */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        {/* Routes ADMIN seulement */}
        <Route
          path="/admin"
          element={
            <PrivateRoute adminOnly>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
