package com.example.springbootmonolith.repositories;

import com.example.springbootmonolith.models.Favorite;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FavoriteRepository extends CrudRepository<Favorite, Long> {
    List<Favorite> findByuserId(Long userId);  // Can also be Iterable type
}