package com.example.HospitalService.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/hospital-service2")
public class Hospital_Controller {
    private final HospitalServiceClient hospitalServiceClient;
    private final String serviceKey = "K9t4%2FMS1InyhHxC7oJtTEGncK1mWLav7ML0G5XcgX7k37YyN6sL7owPZDulwsO7m0jyVwvEqeoiFQp3c7C%2BKuQ%3D%3D";

    @GetMapping("/ww")
    public String Welcome(){
        return"wwwww2222";
    }

    @Autowired
    public Hospital_Controller(HospitalServiceClient hospitalServiceClient) {
        this.hospitalServiceClient = hospitalServiceClient;
    }

    @GetMapping("/all-hospitals")
    public Flux<String> getAllHospitals() {
        return Flux.range(1, Integer.MAX_VALUE) // 페이지 번호 시작
                .flatMap(page -> fetchPage(page))
                .takeUntil(page -> page.isEmpty()); // 페이지가 비어있으면 중단
    }

    private Mono<String> fetchPage(int page) {
        return Mono.just(hospitalServiceClient.getHospitals(serviceKey, 100, page, "110000", "110019"));
    }

    @GetMapping(value = "/hospitals" , produces = "application/xml; charset=UTF-8")
    public Mono<String> getHospitals() {
        String response = hospitalServiceClient.getHospitals(serviceKey, 10000, 1, "110000","110001"); // 서울 강남 10000개까지 돌릴 수 있음 => 10000개를 해야함
        String utf8EncodedResponse = new String(response.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8); // 일단 이걸로 utf-8 문제 해결
        return Mono.just(utf8EncodedResponse);
    }

    // 일단 시 -> 구 까지 선택을 마치면 읍/면/동은 만들 수 있을 듯


}
