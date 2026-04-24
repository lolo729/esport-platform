package com.esport.esport.dto;

import lombok.Data;

@Data
public class ScoreDTO {

    private Long id;

    private String username;      // pas User object
    private String competitionName;

    private Integer points;
}