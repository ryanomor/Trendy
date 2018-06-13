package com.example.springbootmonolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FAVORITES")
public class Favorite {
    /*
    public Song(String userId, String song, String artist, String img) {
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

    @Column(name = "USER_ID")
    private Long userId;

//    @ManyToOne
//    @PrimaryKeyJoinColumn(name = "USER_ID")
//    private User user;

    @Column(name = "SONG")
    private String song;

    @Column(name = "ARTIST")
    private String artist;

    @Column(name = "IMG")
    private String img;

    @Column(name = "URL")
    private String url;

    @Column(name = "TAGS")
    private String tags;
}