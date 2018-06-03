package com.example.springbootmonolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FRIENDS")
public class Friend {
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

//    @ManyToMany
//    @PrimaryKeyJoinColumn(name = "USER_ID")
//    private User user;
//
//    @ManyToMany
//    @PrimaryKeyJoinColumn(name = "FRIEND_ID")
//    private User friend;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "FRIEND_ID")
    private Long friendId;
}