import { useState, useEffect } from "react";
import rankingService from "../services/rankingService";

const MEDALS = ["🥇", "🥈", "🥉"];

const LeaderboardPage = () => {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await rankingService.getGlobal();
      setRanking(res.data);
    } catch {} finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // Polling toutes les 30 secondes
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval); // Nettoyage
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"/>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Classement Global</h1>
          <p className="text-gray-500 text-sm mt-1">Mis à jour toutes les 30s</p>
        </div>
        <button onClick={load}
          className="text-xs text-cyan-400 border border-cyan-400/30 px-3 py-1.5 rounded-lg hover:bg-cyan-400/10">
          Actualiser
        </button>
      </div>

      <div className="space-y-2">
        {ranking.map((entry, index) => (
          <div key={index}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-colors
              ${index === 0 ? "bg-yellow-400/5 border-yellow-400/20" :
                index === 1 ? "bg-gray-400/5 border-gray-400/15" :
                index === 2 ? "bg-orange-400/5 border-orange-400/15" :
                "bg-[#13131a] border-white/[0.06]"}`}
          >
            {/* Rang */}
            <div className="w-8 text-center">
              {index < 3
                ? <span className="text-xl">{MEDALS[index]}</span>
                : <span className="text-gray-600 font-mono text-sm">#{index + 1}</span>
              }
            </div>

            {/* Avatar + nom */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              {(entry.username || entry[0]?.username || "?")[0].toUpperCase()}
            </div>

            <span className="flex-1 text-white font-medium">
              {entry.username || entry[0]?.username || "Joueur"}
            </span>

            <span className="font-mono text-cyan-400 font-bold">
              {entry.totalPoints || entry[1] || 0} pts
            </span>
          </div>
        ))}
      </div>

      {ranking.length === 0 && (
        <p className="text-center text-gray-600 py-20">Aucun score enregistré.</p>
      )}
    </div>
  );
};

export default LeaderboardPage;