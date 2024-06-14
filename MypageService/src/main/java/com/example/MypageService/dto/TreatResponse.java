package com.example.MypageService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TreatResponse {
    private Long id;
    private MedicationResponse medicationId;
    private LocalDate treatStartDate;
    private int treatSubject;
    private String hospitalName;
    private String hpid;
    private String visitDays;
    private String userName;
    private String userIdentity;
    private int prescribeCnt;
    private int deductibleAmt;
    private int publicCharge;
}
