package com.esport.esport.service;

import com.esport.esport.model.Competition;
import com.esport.esport.repository.CompetitionRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompetitionService {

    private final CompetitionRepository competitionRepository;

    // 📌 liste des compétitions
    public List<Competition> getAllCompetitions() {
        return competitionRepository.findAll();
    }

    // 📌 join competition (logique simple pour l'instant)
    public void joinCompetition(Long id) {
        Competition competition = competitionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Compétition introuvable"));

        // logique future: ajouter user + check maxPlayers
    }
}