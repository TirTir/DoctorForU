package com.example.MypageService.controller;

import com.example.MypageService.api.CommonResponse;
import com.example.MypageService.dto.health.HealthResponse;
import com.example.MypageService.entity.HealthCare;
import com.example.MypageService.service.HealthCareService;
import com.example.MypageService.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/mypage-service")
public class HealthCareController {
    private final HealthCareService healthService;
    //private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(HealthCareController.class);

    @GetMapping("/health/{userId}") // 건강 기록 가져오기 -> 사용자 id를 통해
    public List<HealthResponse> getHealth(@PathVariable String userId) {
        logger.info("userId: " + userId);
        //List<HealthResponse> response = healthService.getHealth(userId);
        return healthService.getHealth(userId);
    }

//    @GetMapping("/health") // 건강 기록 가져오기 -> Http Only Cookie
//    public List<HealthResponse> getHealth(HttpServletRequest request) {
//        UserFeignResponse response = userService.getUserIdByToken(request);
//        logger.info("userId: " + response.getUserId());
//
//        //List<HealthResponse> response = healthService.getHealth(userId);
//        return healthService.getHealth(response.getUserId());
//    }

    // 건강 기록 작성해서 저장하는 로직 필요
    @PostMapping("/health/register/{userId}")
    public CommonResponse<String> postHealthRegister(@PathVariable String userId, @RequestBody HealthCare healthCare){
        logger.info("userId : " + userId);
        logger.info("systolic: " + healthCare.getSystolic() + "diastolic:" + healthCare.getDiastolic() + "weight: " + healthCare.getWeight());
        healthService.registerHealth(userId, healthCare);
        return CommonResponse.ok("건강 기록 등록 완료");
    }
}