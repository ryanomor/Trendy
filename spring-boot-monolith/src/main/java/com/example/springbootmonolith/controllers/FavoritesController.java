package com.example.springbootmonolith.controllers;


import com.example.springbootmonolith.models.Task;
import com.example.springbootmonolith.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TasksController {

    @Autowired
    private TaskRepository taskRepository;

    @CrossOrigin(origins = "http://localhost:4200")

    @GetMapping("/tasks")
    public Iterable<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/tasks/{taskId}")
    public Optional<Task> findTaskById(@PathVariable Long taskId) {
        return taskRepository.findById(taskId);
    }

    @CrossOrigin(origins = "http://localhost:4200")

    @GetMapping("/tasks/user/{username}")
    public List<Task> findTasksByUsername(@PathVariable String username) {
        return taskRepository.findTasksByUsername(username);
    }

    @DeleteMapping("/tasks/{taskId}")
    public HttpStatus deleteTaskById(@PathVariable Long taskId) {
        taskRepository.deleteById(taskId);
        return HttpStatus.OK;
    }

    @PostMapping("/tasks")
    public Task createNewTask(@RequestBody Task newTask) {
        return taskRepository.save(newTask);
    }
}