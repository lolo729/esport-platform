package com.esport.esport.service;

import com.esport.esport.model.Score;
import com.esport.esport.model.Competition;

import com.esport.esport.repository.ScoreRepository;
import com.esport.esport.repository.CompetitionRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RankingService {

    private final ScoreRepository scoreRepository;
    private final CompetitionRepository competitionRepository;

    // Classement global — somme de tous les points de chaque joueur
    public List<Object[]> getGlobalRanking() {
        return scoreRepository.findGlobalRanking();
    }

    // Classement d'une compétition spécifique
    public List<Score> getCompetitionRanking(Long competitionId) {
        Competition competition = competitionRepository
                .findById(competitionId)
                .orElseThrow(() -> new RuntimeException("Compétition introuvable"));
        return scoreRepository
                .findByCompetitionOrderByPointsDesc(competition);
    }
}
