package com.esport.esport.repository;

import com.esport.esport.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

    List<Game> findByCategory(String category);

    List<Game> findByNameContainingIgnoreCase(String name);
}