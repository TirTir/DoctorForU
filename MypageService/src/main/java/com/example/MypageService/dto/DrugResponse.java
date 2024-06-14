package com.example.MypageService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DrugResponse {
    private Long id;
    private Long code;
    private String name;
    private String effect;
}
