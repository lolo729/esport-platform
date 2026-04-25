const GameCard = ({ game }) => {
  return (
    <div className="bg-[#13131a] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/20 transition-colors group">
      {/* IMAGE */}
      <div className="h-36 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 flex items-center justify-center">
        {game.imageUrl ? (
          <img
            src={game.imageUrl}
            alt={game.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-4xl">🎮</span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <span className="text-xs text-cyan-400 font-mono uppercase tracking-widest">
          {game.category}
        </span>

        <h3 className="text-white font-bold mt-1 mb-2">{game.name}</h3>

        <p className="text-gray-500 text-sm line-clamp-2">{game.description}</p>
      </div>
    </div>
  );
};

export default GameCard;
