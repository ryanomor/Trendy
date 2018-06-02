package com.example.springbootmonolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "TASKS")
public class Task {
    /*
    public Song(String title, String length, String artist) {
        this.title = title;
        this.length = length;
        this.artist = artist;
    }
    */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "USER_NAME")
//    private User user;

    @Column(name = "USER_NAME")
    private String username;

    @Column(name = "TASK")
    private String task;

    @Column(name = "COMPLETED")
    private int completed;
}