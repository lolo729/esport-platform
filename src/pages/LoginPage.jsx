import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState("");
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setErreur(err.response?.data?.message || "Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <div className="w-full max-w-md p-8 bg-[#13131a] border border-white/10 rounded-xl">
        <h1 className="text-2xl font-bold text-white mb-2">Connexion</h1>
        <p className="text-gray-500 text-sm mb-8">
          Accède à ta plateforme e-sport
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.com"
              required
              className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {erreur && (
            <p className="text-red-400 text-sm bg-red-400/10 px-3 py-2 rounded-lg">
              {erreur}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-cyan-400 hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
