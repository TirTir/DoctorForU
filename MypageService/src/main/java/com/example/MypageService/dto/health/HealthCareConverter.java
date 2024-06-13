package com.example.MypageService.dto.health;

import com.example.MypageService.entity.HealthCare;

import java.util.List;
import java.util.stream.Collectors;

public class HealthCareConverter { // entity 리스트를 dto리스트로 변환하는

    public static HealthResponse toResponse(HealthCare healthCare) {
        return HealthResponse.builder()
                .systolic(healthCare.getSystolic())
                .diastolic(healthCare.getDiastolic())
                .weight(healthCare.getWeight())
                .createAt(healthCare.getCreateAt())
                .build();
    }

    public static List<HealthResponse> toResponseList(List<HealthCare> healthCareList) {
        return healthCareList.stream()
                .map(HealthCareConverter::toResponse)
                .collect(Collectors.toList());
    }
}
