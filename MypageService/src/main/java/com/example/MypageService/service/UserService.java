package com.example.MypageService.service;

import com.example.MypageService.controller.MypageServiceClient;
import com.example.MypageService.dto.UserFeignResponse;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private MypageServiceClient mypageServiceClient;

    public UserFeignResponse getUserIdByToken(HttpServletRequest request) {
        // 쿠키에서 토큰 추출
        Optional<Cookie> accessToken = getCookie(request, "accessToken");
        String cookie = accessToken.map(Cookie::getValue).orElseThrow(() -> new IllegalArgumentException("Access token not found"));

        // Feign 클라이언트를 통해 사용자 ID 가져오기
        return mypageServiceClient.getUserIdByToken(cookie);
    }

    private Optional<Cookie> getCookie(HttpServletRequest request, String name) {
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals(name)) {
                    return Optional.of(cookie);
                }
            }
        }
        return Optional.empty();
    }
}
