import { useState, useEffect } from "react";
import gameService from "../services/gameService";

const useGames = () => {
  const [games, setGames]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await gameService.getAll();
        setGames(res.data);
      } catch {
        setError("Impossible de charger les jeux");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { games, loading, error };
};

export default useGames;