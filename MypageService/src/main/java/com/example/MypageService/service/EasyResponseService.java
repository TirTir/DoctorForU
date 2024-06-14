package com.example.MypageService.service;

import com.example.MypageService.controller.EasyResponseClient;
import com.example.MypageService.dto.ApiServerRequest;
import com.example.MypageService.dto.ApiServerResponse;
import com.example.MypageService.dto.TreatResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EasyResponseService {
    private  final EasyResponseClient easyResponseClient;

    public List<TreatResponse> fetchTreats(String userIdentity, String token){
        ApiServerRequest request = new ApiServerRequest(userIdentity, token); // 이것도 토큰 properties에 저장
        ResponseEntity<List<TreatResponse>> responseEntity = easyResponseClient.getTreat(request);
        if(responseEntity.getStatusCode().is2xxSuccessful()){
            return responseEntity.getBody();
        }
        else{
            throw new RuntimeException("진단 내역을 가져오는데 실패했습니다.");
        }
    }

}
