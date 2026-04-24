package com.esport.esport.dto;

import lombok.Data;

@Data
public class GameDTO {

    private Long id;
    private String name;
    private String description;
    private String category;
    private String imageUrl;
}