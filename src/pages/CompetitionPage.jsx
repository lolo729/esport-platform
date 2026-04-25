import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import competitionService from "../services/competitionService";

const CompetitionPage = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState(null); // id en cours
  const { token } = useAuth();

  useEffect(() => {
    competitionService
      .getAll()
      .then((res) => setCompetitions(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleJoin = async (id) => {
    setJoining(id);
    try {
      await competitionService.join(id);
      alert("Tu as rejoint la compétition !");
    } catch (err) {
      alert(err.response?.data?.message || "Erreur");
    } finally {
      setJoining(null);
    }
  };

  const statusColor = {
    OPEN: "text-green-400 bg-green-400/10 border-green-400/20",
    ONGOING: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    FINISHED: "text-gray-500 bg-gray-500/10 border-gray-500/20",
  };

  if (loading)
    return <div className="text-center py-20 text-gray-400">Chargement...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Compétitions</h1>

      <div className="grid gap-4">
        {competitions.map((c) => (
          <div
            key={c.id}
            className="bg-[#13131a] border border-white/[0.06] rounded-xl p-5 flex items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-white font-bold">{c.name}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded border font-mono ${statusColor[c.status] || ""}`}
                >
                  {c.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                Jeu : {c.game?.name} · Max : {c.maxPlayers} joueurs
              </p>
            </div>

            {token && c.status === "OPEN" && (
              <button
                onClick={() => handleJoin(c.id)}
                disabled={joining === c.id}
                className="shrink-0 bg-cyan-400 text-black text-sm font-bold px-5 py-2 rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50"
              >
                {joining === c.id ? "..." : "Rejoindre"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitionPage;
