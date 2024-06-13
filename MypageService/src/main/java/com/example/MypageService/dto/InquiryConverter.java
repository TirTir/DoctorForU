package com.example.MypageService.dto;

import com.example.MypageService.dto.health.HealthResponse;
import com.example.MypageService.entity.HealthCare;
import com.example.MypageService.entity.Inquiry;

import java.util.List;
import java.util.stream.Collectors;

public class InquiryConverter {
    public static InquiryResponse toResponse(Inquiry inquiry) {
        return InquiryResponse.builder()
                .title(inquiry.getTitle())
                .content(inquiry.getContent())
                .status(inquiry.isStatus())
                .createAt(inquiry.getCreateAt())
                .build();
    }

    public static List<InquiryResponse> toResponseList(List<Inquiry> inquiryList){
        return inquiryList.stream()
                .map(InquiryConverter::toResponse)
                .collect(Collectors.toList());
    }
}
