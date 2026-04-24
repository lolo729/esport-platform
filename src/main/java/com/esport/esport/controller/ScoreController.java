package com.esport.esport.controller;

import com.esport.esport.model.Score;
import com.esport.esport.service.ScoreService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/scores")
@RequiredArgsConstructor
public class ScoreController {

    private final ScoreService scoreService;

    // 📌 Ajouter score
    @PostMapping
    public ResponseEntity<Score> addScore(@RequestBody Score score) {
        return ResponseEntity.status(201)
                .body(scoreService.addScore(score));
    }
}