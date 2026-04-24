package com.esport.esport.model;


import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "competitions")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Competition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne                         // Plusieurs compétitions pour 1 jeu
    @JoinColumn(name = "game_id")
    private Game game;

    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer maxPlayers;
    private String status;             // OPEN, ONGOING, FINISHED
}