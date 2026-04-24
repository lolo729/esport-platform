package com.esport.esport.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CompetitionDTO {

    private Long id;
    private String name;

    private String gameName;   // ⚠️ pas Game object

    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer maxPlayers;
    private String status;
}