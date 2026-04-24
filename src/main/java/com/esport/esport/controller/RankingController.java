package com.esport.esport.controller;

import com.esport.esport.model.Score;
import com.esport.esport.service.RankingService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ranking")
@RequiredArgsConstructor
public class RankingController {

    private final RankingService rankingService;

    // 🌍 Global ranking
    @GetMapping("/global")
    public List<Object[]> globalRanking() {
        return rankingService.getGlobalRanking();
    }

    // 🏆 Competition ranking
    @GetMapping("/competition/{id}")
    public List<Score> competitionRanking(@PathVariable Long id) {
        return rankingService.getCompetitionRanking(id);
    }
}