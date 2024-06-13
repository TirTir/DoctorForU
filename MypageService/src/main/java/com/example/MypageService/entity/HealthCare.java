package com.example.MypageService.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data @Builder
@Table(name = "health_care")
@NoArgsConstructor
@AllArgsConstructor
public class HealthCare {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", unique = false, nullable = false)
    private String userId;

    @Column(name = "systolic", nullable = false)
    private int systolic;

    @Column(name = "diastolic", nullable = false)
    private int diastolic;

    @Column(name = "weight", nullable = false)
    private int weight;

    @Column(name = "createAt", nullable = false)
    private LocalDate createAt;

    public HealthCare(String userId, int systolic, int diastolic, int weight){
        this.userId = userId;
        this.systolic = systolic;
        this.diastolic = diastolic;
        this.weight = weight;
        this.createAt = LocalDate.now();
    }
}
