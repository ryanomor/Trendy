package com.example.springbootmonolith.controllers;


import com.example.springbootmonolith.models.Friend;
import com.example.springbootmonolith.repositories.FriendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FriendsController {

    @Autowired  // Injects instance of repository to the controller
    private FriendRepository friendRepository;

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/friends/{userId}")
    public List<Friend> findFriendsById(@PathVariable Long userId) {
        return friendRepository.findByuserId(userId);
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/friends/{id}")
    public HttpStatus deleteFriendById(@PathVariable Long id) {
        friendRepository.deleteById(id);
        return HttpStatus.OK;
    }

//    @DeleteMapping("/friends/{userId}/{friendId}")
//    public HttpStatus deleteFriendById(@PathVariable Long userId, @PathVariable Long taskId) {
//        friendRepository.deleteById(taskId);
//        return HttpStatus.OK;
//    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/friends")
    public Friend createNewFriend(@RequestBody Friend newFriend) {
        return friendRepository.save(newFriend);
    }
}