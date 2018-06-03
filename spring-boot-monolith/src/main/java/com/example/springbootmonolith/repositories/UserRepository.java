package com.example.springbootmonolith.repositories;

import com.example.springbootmonolith.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByemail(String email);
    Optional<User> findBypassword(String password);
}