package com.example.MypageService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiServerRequest {
    private String userIdentity; // 프론트 받아와야 함
    private String token; // doctorforUdb - table Root -> access, refresh, organizationName, organizationEmail, organizationPW

}
