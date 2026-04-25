import { useState, useEffect } from "react";
import competitionService from "../services/competitionService";

const useCompetitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCompetitions = async () => {
      try {
        const res = await competitionService.getAll();
        setCompetitions(res.data);
      } catch (err) {
        setError("Impossible de charger les compétitions");
      } finally {
        setLoading(false);
      }
    };

    loadCompetitions();
  }, []);

  return { competitions, loading, error };
};

export default useCompetitions;
