package com.example.HospitalService.Controller;

import com.example.HospitalService.Service.HospitalDetailService;
import com.example.HospitalService.dto.HospitalRequest;
import com.example.HospitalService.Service.HospitalService;
import com.example.HospitalService.dto.HpidRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/hospital-service")
public class HospitalController {

    private static final Logger logger = LoggerFactory.getLogger(HospitalController.class);
    private final HospitalServiceClient hospitalServiceClient;
    @Autowired
    public HospitalController(HospitalServiceClient hospitalServiceClient) {
        this.hospitalServiceClient = hospitalServiceClient;
    }

    @Autowired
    private HospitalService hospitalService;

    @Autowired
    private HospitalDetailService hospitalDetailService;

    @PostMapping("/hospitalsList")
    public ResponseEntity<?> searchHospitals(@RequestBody HospitalRequest request) { // FE에서 날린 데이터들 ( 병원명이라던가, 위치)
        logger.info("Received request: " + request);
        return ResponseEntity.ok(hospitalService.searchHospitals(request));
    }

    @GetMapping("/hospitalDetail")
    public ResponseEntity<?> getHospitalDetail(@RequestParam String hpid){
        HpidRequest NewHpid = new HpidRequest();
        NewHpid.setHpid(hpid);
        logger.info("Received HPID: " + hpid);
        return ResponseEntity.ok(hospitalDetailService.getHospitalDetail(NewHpid));
    }

//    @PostMapping(value = "/hospitalsList2" , produces = "application/xml; charset=UTF-8")
//    public Mono<String> getHospitals() {
//
//
//        //String response = hospitalServiceClient.getHospitals(serviceKey, 10000, 1, "110000","110001"); // 서울 강남 10000개까지 돌릴 수 있음 => 10000개를 해야함
//        //String utf8EncodedResponse = new String(response.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8); // 일단 이걸로 utf-8 문제 해결
//        //return Mono.just(utf8EncodedResponse);
//    }



}

