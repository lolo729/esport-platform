package com.esport.esport.service;

import com.esport.esport.model.Score;
import com.esport.esport.repository.ScoreRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ScoreService {

    private final ScoreRepository scoreRepository;

    public Score addScore(Score score) {
        return scoreRepository.save(score);
    }
}