import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0d0d14] text-white">

      {/* HERO SECTION */}
     <section className="text-center py-20 px-6 animate-slide-up">
        <h1 className="text-5xl font-bold mb-4 animate-float">
             Welcome to <span className="text-cyan-400">E-SPORT</span>
        </h1>

        <p className="text-gray-400 mb-8">
          Compete, play and climb the leaderboard
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/games"
            className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-cyan-300"
          >
            Explore Games
          </Link>

          <Link
            to="/leaderboard"
            className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10"
          >
            Leaderboard
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-10">

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl font-bold text-cyan-400">12+</h2>
          <p className="text-gray-400">Games</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl font-bold text-cyan-400">50+</h2>
          <p className="text-gray-400">Competitions</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl font-bold text-cyan-400">1000+</h2>
          <p className="text-gray-400">Players</p>
        </div>

      </section>

    </div>
  );
};

export default HomePage;