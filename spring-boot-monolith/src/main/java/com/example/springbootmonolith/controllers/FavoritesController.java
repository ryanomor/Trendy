package com.example.springbootmonolith.controllers;


import com.example.springbootmonolith.models.Favorite;
import com.example.springbootmonolith.repositories.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FavoritesController {

    @Autowired  // Injects instance of repository to the controller
    private FavoriteRepository favoriteRepository;

//    @CrossOrigin(origins = "http://localhost:3000")

    @GetMapping("/faves/artist/{artist}")
    public List<Favorite> getFavesByArtist(@PathVariable String artist) {
        return favoriteRepository.findByartist(artist);
    }

    @GetMapping("/faves/{userId}")
    public List<Favorite> getFavesByUserId(@PathVariable Long userId) {
        return favoriteRepository.findByuserId(userId);
    }

//    @CrossOrigin(origins = "http://localhost:3000")

    @DeleteMapping("/faves/{faveId}")
    public HttpStatus deleteFaveById(@PathVariable Long faveId) {
        favoriteRepository.deleteById(faveId);
        return HttpStatus.OK;
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/faves")
    public Favorite createNewFave(@RequestBody Favorite newFave) {
        return favoriteRepository.save(newFave);
    }
}
