package com.example.MypageService.dto.health;

import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
public class HealthResponse { // 여러개 일듯 -> 응답이 아마 List형태로 보내야할 것 같음
    private int systolic;
    private int diastolic;
    private int weight;
    private LocalDate createAt;
}
