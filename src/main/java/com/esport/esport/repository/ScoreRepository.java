package com.esport.esport.repository;

import com.esport.esport.model.Score;
import com.esport.esport.model.Competition;
import com.esport.esport.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Long> {

    // Classement d'une compétition (du plus haut au plus bas)
    List<Score> findByCompetitionOrderByPointsDesc(Competition competition);

    // Score d'un joueur dans une compétition
    Optional<Score> findByUserAndCompetition(User user, Competition competition);

    // Classement global — top joueurs
    @Query("SELECT s.user, SUM(s.points) as total " +
            "FROM Score s " +
            "GROUP BY s.user " +
            "ORDER BY total DESC")
    List<Object[]> findGlobalRanking();
}


