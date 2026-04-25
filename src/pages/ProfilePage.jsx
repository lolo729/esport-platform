import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const initiale = (user?.email || "?")[0].toUpperCase();

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-white mb-8">Mon Profil</h1>

      <div className="bg-[#13131a] border border-white/[0.06] rounded-2xl p-8">
        {/* Avatar */}
        <div className="flex items-center gap-5 mb-8 pb-8 border-b border-white/[0.06]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-black text-2xl font-black">
            {initiale}
          </div>
          <div>
            <p className="text-white font-bold text-lg">{user?.email}</p>
            <span className={`text-xs font-mono px-2 py-0.5 rounded border mt-1 inline-block
              ${isAdmin
                ? "text-cyan-400 bg-cyan-400/10 border-cyan-400/25"
                : "text-gray-400 bg-gray-400/10 border-gray-400/20"}`}>
              {user?.role || "USER"}
            </span>
          </div>
        </div>

        {/* Infos */}
        <div className="space-y-4">
          {[
            ["Email",  user?.email],
            ["Rôle",   user?.role || "USER"],
            ["Statut", "Actif"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{label}</span>
              <span className="text-white text-sm font-medium">{value}</span>
            </div>
          ))}
        </div>

        <button onClick={handleLogout}
          className="mt-8 w-full text-red-400 border border-red-400/20 py-2.5 rounded-lg text-sm hover:bg-red-400/10 transition-colors">
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;