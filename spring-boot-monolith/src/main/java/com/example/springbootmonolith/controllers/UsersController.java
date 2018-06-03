package com.example.springbootmonolith.controllers;


import com.example.springbootmonolith.models.User;
import com.example.springbootmonolith.repositories.UserRepository;
import org.hibernate.mapping.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UsersController {

    @Autowired  // Injects instance of repository to the controller
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/{userId}")
    public Optional<User> findUserById(@PathVariable Long userId) {
        return userRepository.findById(userId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/login/{email}")
    public Optional<User> findUserByEmail(@PathVariable String email) {
      return userRepository.findByemail(email);
    }

//    @CrossOrigin(origins = "http://localhost:3000")
//    @PatchMapping("/users/{userId")
//    public User updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
//        User currUser = userRepository.findById(userId).get(); // .get() gets the actual user from the Optional list
//
//        currUser.setfirstName(updatedUser.getfirstName());
//    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/users/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/users")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }
}