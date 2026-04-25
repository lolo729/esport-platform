import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// Dans Navbar, ajoutez ces classes pour améliorer les animations
<nav className="sticky top-0 z-50 bg-[#0d0d14]/90 backdrop-blur border-b border-white/[0.06] animate-slide-down"></nav>;
const Navbar = () => {
  const { token, user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0d0d14]/90 backdrop-blur border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-white text-base tracking-wide">
          <span className="text-cyan-400">E</span>SPORT
        </Link>

        {/* Liens principaux */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {[
            ["/games", "Jeux"],
            ["/competitions", "Compétitions"],
            ["/leaderboard", "Classement"],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          {isAdmin && (
            <Link
              to="/admin"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Admin
            </Link>
          )}
        </div>

        {/* Auth section */}
        <div className="flex items-center gap-3">
          {token ? (
            <>
              <Link
                to="/profile"
                className="text-sm text-gray-300 hover:text-white"
              >
                {user?.email}
              </Link>
              <button
                onClick={handleLogout}
                className="text-xs text-gray-500 hover:text-red-400 transition-colors px-3 py-1.5 border border-white/10 rounded-lg"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-gray-400 hover:text-white"
              >
                Connexion
              </Link>
              <Link
                to="/register"
                className="text-sm bg-cyan-400 text-black font-bold px-4 py-1.5 rounded-lg hover:bg-cyan-300 transition-colors"
              >
                S'inscrire
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
