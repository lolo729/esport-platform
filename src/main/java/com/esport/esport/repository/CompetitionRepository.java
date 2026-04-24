package com.esport.esport.repository;

import com.esport.esport.model.Competition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Long> {

    List<Competition> findByStatus(String status);

    List<Competition> findByGame_Id(Long gameId);
}