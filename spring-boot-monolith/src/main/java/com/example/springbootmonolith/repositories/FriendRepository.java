package com.example.springbootmonolith.repositories;

import com.example.springbootmonolith.models.Friend;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FriendRepository extends CrudRepository<Friend, Long> {
    List<Friend> findByuserId(Long userId);  // Can also be Iterable type
}