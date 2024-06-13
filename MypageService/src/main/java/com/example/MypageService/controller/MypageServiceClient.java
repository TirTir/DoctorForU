package com.example.MypageService.controller;

import com.example.MypageService.dto.UserFeignResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "user-service", url = "http://localhost:8000")
public interface MypageServiceClient {
    @GetMapping(value = "/auth")
    UserFeignResponse getUserIdByToken(@RequestHeader("Cookie") String cookie);
}
