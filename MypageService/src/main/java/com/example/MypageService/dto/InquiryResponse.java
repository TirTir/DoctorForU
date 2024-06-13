package com.example.MypageService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
public class InquiryResponse {
    private String title;
    private String content;
    private boolean status;
    private LocalDate createAt;
}
