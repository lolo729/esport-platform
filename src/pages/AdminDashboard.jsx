import { useState, useEffect } from "react";
import gameService from "../services/gameService";
import competitionService from "../services/competitionService";

const AdminDashboard = () => {
  const [tab, setTab]           = useState("games");
  const [games, setGames]       = useState([]);
  const [competitions, setComps] = useState([]);
  const [newGame, setNewGame]   = useState({ name: "", description: "", category: "" });

  useEffect(() => {
    gameService.getAll().then(r => setGames(r.data));
    competitionService.getAll().then(r => setComps(r.data));
  }, []);

  const handleCreateGame = async (e) => {
    e.preventDefault();
    try {
      const res = await gameService.create(newGame);
      setGames([...games, res.data]);
      setNewGame({ name: "", description: "", category: "" });
    } catch (e) {
      alert("Erreur : " + (e.response?.data?.message || e.message));
    }
  };

  const handleDeleteGame = async (id) => {
    if (!confirm("Supprimer ce jeu ?")) return;
    await gameService.delete(id);
    setGames(games.filter(g => g.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
      <p className="text-gray-500 text-sm mb-8">Gestion de la plateforme</p>

      {/* Onglets */}
      <div className="flex gap-1 mb-8 bg-[#13131a] p-1 rounded-lg w-fit border border-white/[0.06]">
        {["games", "competitions"].map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors
              ${tab === t ? "bg-cyan-400 text-black" : "text-gray-400 hover:text-white"}`}>
            {t === "games" ? `Jeux (${games.length})` : `Compétitions (${competitions.length})`}
          </button>
        ))}
      </div>

      {/* Onglet Jeux */}
      {tab === "games" && (
        <div>
          {/* Formulaire création */}
          <div className="bg-[#13131a] border border-white/[0.06] rounded-xl p-6 mb-6">
            <h2 className="text-white font-bold mb-4">Ajouter un jeu</h2>
            <form onSubmit={handleCreateGame} className="grid grid-cols-3 gap-3">
              {[
                ["name",        "Nom du jeu"],
                ["category",    "Catégorie"],
                ["description", "Description"],
              ].map(([k, ph]) => (
                <input key={k} value={newGame[k]}
                  onChange={e => setNewGame({...newGame, [k]: e.target.value})}
                  placeholder={ph} required
                  className="bg-[#0a0a0f] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                />
              ))}
              <button type="submit"
                className="bg-cyan-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-cyan-300 text-sm">
                + Créer
              </button>
            </form>
          </div>

          {/* Liste des jeux */}
          <div className="space-y-2">
            {games.map(g => (
              <div key={g.id}
                className="flex items-center justify-between bg-[#13131a] border border-white/[0.06] rounded-xl px-5 py-3">
                <div>
                  <span className="text-white font-medium">{g.name}</span>
                  <span className="text-gray-500 text-sm ml-3">{g.category}</span>
                </div>
                <button onClick={() => handleDeleteGame(g.id)}
                  className="text-xs text-red-400 hover:text-red-300 border border-red-400/20 px-3 py-1 rounded-lg">
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Onglet Compétitions */}
      {tab === "competitions" && (
        <div className="space-y-2">
          {competitions.map(c => (
            <div key={c.id}
              className="flex items-center justify-between bg-[#13131a] border border-white/[0.06] rounded-xl px-5 py-3">
              <div>
                <span className="text-white font-medium">{c.name}</span>
                <span className="text-gray-500 text-sm ml-3">{c.status}</span>
              </div>
              <button
                onClick={async () => {
                  if(!confirm("Supprimer ?")) return;
                  await competitionService.delete(c.id);
                  setComps(competitions.filter(x => x.id !== c.id));
                }}
                className="text-xs text-red-400 border border-red-400/20 px-3 py-1 rounded-lg hover:bg-red-400/10">
                Supprimer
              </button>
            </div>
          ))}
          {competitions.length === 0 && (
            <p className="text-gray-600 text-center py-12">Aucune compétition.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;