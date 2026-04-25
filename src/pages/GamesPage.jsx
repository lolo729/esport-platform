import useGames from "../hooks/useGames";
import GameCard from "../components/GameCard";

const GamesPage = () => {
  const { games, loading, error } = useGames();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (error)
    return <div className="text-center py-20 text-red-400">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-white mb-2">Jeux</h1>

      <p className="text-gray-500 mb-8">{games.length} jeux disponibles</p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {/* EMPTY STATE */}
      {games.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          Aucun jeu disponible. Un admin doit en ajouter.
        </div>
      )}
    </div>
  );
};

export default GamesPage;
