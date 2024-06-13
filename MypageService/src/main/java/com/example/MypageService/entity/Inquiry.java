package com.example.MypageService.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data @Builder
@Table(name = "inquiry")
@NoArgsConstructor
@AllArgsConstructor
public class Inquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", unique = false, nullable = false)
    private String userId;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Column(name = "content", nullable = false, length = 500)
    private String content;

    @Column(name="status", nullable = false)
    private boolean status;

    @Column(name = "createAt")
    private LocalDate createAt;
}
