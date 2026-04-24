package com.esport.esport.repository;

import com.esport.esport.model.Comment;
import com.esport.esport.model.Competition;
import com.esport.esport.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByCompetitionOrderByCreatedAtDesc(Competition competition);

    List<Comment> findByUser(User user);
}