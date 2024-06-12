package com.example.HospitalService.Controller;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "hospitalServiceClient", url = "https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList")
public interface HospitalServiceClient {

    @GetMapping
    String getHospitals(@RequestParam("ServiceKey") String serviceKey,
                        @RequestParam("numOfRows") int numOfRows,
                        @RequestParam("pageNo") int pageNo,
                        @RequestParam("sidoCd") String sidoCd,
                        @RequestParam("sgguCd") String sgguCd);
}
