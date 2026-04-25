import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [erreur, setErreur]  = useState("");
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.username, form.email, form.password);
      navigate("/");
    } catch (err) {
      setErreur(err.response?.data?.message || "Erreur d'inscription");
    }
  };

  const fields = [
    { label: "Pseudo",       name: "username", type: "text",     placeholder: "TonPseudo" },
    { label: "Email",        name: "email",    type: "email",    placeholder: "ton@email.com" },
    { label: "Mot de passe", name: "password", type: "password", placeholder: "••••••••" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <div className="w-full max-w-md p-8 bg-[#13131a] border border-white/10 rounded-xl">
        <h1 className="text-2xl font-bold text-white mb-2">Créer un compte</h1>
        <p className="text-gray-500 text-sm mb-8">Rejoins la compétition</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(f => (
            <div key={f.name}>
              <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                {f.label}
              </label>
              <input
                type={f.type} name={f.name}
                value={form[f.name]} onChange={handleChange}
                placeholder={f.placeholder} required
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          ))}
          {erreur && <p className="text-red-400 text-sm">{erreur}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50">
            {loading ? "Inscription..." : "S'inscrire"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;