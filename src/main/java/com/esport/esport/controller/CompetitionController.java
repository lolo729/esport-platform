package com.esport.esport.controller;

import com.esport.esport.model.Competition;
import com.esport.esport.service.CompetitionService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/api/competitions")
@RequiredArgsConstructor
public class CompetitionController {

    private final CompetitionService competitionService;

    // 📌 GET all
    @GetMapping
    public List<Competition> getAll() {
        return competitionService.getAllCompetitions();
    }

    // 📌 JOIN competition
    @PostMapping("/{id}/join")
    public ResponseEntity<String> joinCompetition(@PathVariable Long id) {
        competitionService.joinCompetition(id);
        return ResponseEntity.ok("Inscription réussie");
    }
}