const RankingRow = ({ entry, index, medal }) => {
  const getBg = () => {
    if (index === 0) return "bg-yellow-400/5 border-yellow-400/20";
    if (index === 1) return "bg-gray-400/5 border-gray-400/15";
    if (index === 2) return "bg-orange-400/5 border-orange-400/15";
    return "bg-[#13131a] border-white/[0.06]";
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${getBg()}`}
    >
      {/* Rank */}
      <div className="w-8 text-center">
        {index < 3 ? (
          <span className="text-xl">{medal}</span>
        ) : (
          <span className="text-gray-600 font-mono text-sm">#{index + 1}</span>
        )}
      </div>

      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
        {(entry.username || "U")[0].toUpperCase()}
      </div>

      {/* Username */}
      <span className="flex-1 text-white font-medium">
        {entry.username || "Joueur"}
      </span>

      {/* Points */}
      <span className="font-mono text-cyan-400 font-bold">
        {entry.totalPoints || 0} pts
      </span>
    </div>
  );
};

export default RankingRow;