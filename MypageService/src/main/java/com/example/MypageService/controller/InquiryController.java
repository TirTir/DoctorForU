package com.example.MypageService.controller;

import com.example.MypageService.dto.InquiryResponse;
import com.example.MypageService.dto.health.HealthResponse;
import com.example.MypageService.service.InquiryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/mypage-service")
public class InquiryController {
    private final InquiryService inquiryService;
    private static final Logger logger = LoggerFactory.getLogger(HealthCareController.class);
    @GetMapping("/inquiry/{userId}") // 문의 내역 가져오기 -> 사용자 id를 통해
    public List<InquiryResponse> getInquiry(@PathVariable String userId) {
        logger.info("userId: " + userId);
        //List<HealthResponse> response = inquiryService.getHealth(userId);
        return inquiryService.getInquiry(userId);
    }
}
