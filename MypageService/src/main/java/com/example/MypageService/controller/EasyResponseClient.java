package com.example.MypageService.controller;

import com.example.MypageService.dto.ApiServerRequest;
import com.example.MypageService.dto.ApiServerResponse;
import com.example.MypageService.dto.TreatResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "EasyResponseClient", url = "${EasyResponse.service.url}")
public interface EasyResponseClient {
    @PostMapping("/api/v1/treat/getTreat")
    ResponseEntity<List<TreatResponse>> getTreat(@RequestBody ApiServerRequest treatRequest);
}
