package com.esport.esport.controller;

import com.esport.esport.model.User;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/me")
    public User getMe(Authentication authentication) {
        return (User) authentication.getPrincipal();
    }
}