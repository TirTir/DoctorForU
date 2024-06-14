package com.example.MypageService.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicationResponse {
    private Long id;
    private String diseaseId;
    private int prescribeDays;
    private LocalDate treatDate;
    private List<DrugResponse> drugs;
}
