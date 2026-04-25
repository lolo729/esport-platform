import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import competitionService from "../services/competitionService";

const CompetitionCard = ({ competition }) => {
  const { token } = useAuth();
  const [joining, setJoining] = useState(false);

  const statusColor = {
    OPEN: "text-green-400 bg-green-400/10 border-green-400/20",
    ONGOING: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    FINISHED: "text-gray-500 bg-gray-500/10 border-gray-500/20",
  };

  const handleJoin = async () => {
    setJoining(true);
    try {
      await competitionService.join(competition.id);
      alert("Tu as rejoint la compétition !");
    } catch (err) {
      alert(err.response?.data?.message || "Erreur");
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="bg-[#13131a] border border-white/[0.06] rounded-xl p-5 flex items-center justify-between gap-4">

      {/* Infos */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-white font-bold">{competition.name}</h3>

          <span
            className={`text-xs px-2 py-0.5 rounded border font-mono ${
              statusColor[competition.status] || ""
            }`}
          >
            {competition.status}
          </span>
        </div>

        <p className="text-gray-500 text-sm">
          Jeu : {competition.game?.name} · Max : {competition.maxPlayers} joueurs
        </p>
      </div>

      {/* Button */}
      {token && competition.status === "OPEN" && (
        <button
          onClick={handleJoin}
          disabled={joining}
          className="shrink-0 bg-cyan-400 text-black text-sm font-bold px-5 py-2 rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50"
        >
          {joining ? "..." : "Rejoindre"}
        </button>
      )}
    </div>
  );
};

export default CompetitionCard;