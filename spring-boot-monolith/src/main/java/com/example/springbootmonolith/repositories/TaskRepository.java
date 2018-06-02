package com.example.springbootmonolith.repositories;

import com.example.springbootmonolith.models.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Long> {
    List<Task> findTasksByUsername(String username);  // Can also be Iterable type
}