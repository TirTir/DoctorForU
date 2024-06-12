package com.example.HospitalService.dto;

import lombok.Data;

@Data
public class HospitalRequest {
    private String primaryOption = ""; // 진료과목(department) or 기관선택(institute)
    private String secondaryOption = ""; // primaryOption에 따른 두 번째 선택사항 고르기
    private String selectedCity = "";  // 시
    private String selectedDistrict = ""; // 시/군/구
    private String hospitalName = ""; // 병원명

    // Getters and Setters
    public String getPrimaryOption() {
        return primaryOption;
    }

    public void setPrimaryOption(String primaryOption) {
        this.primaryOption = primaryOption;
    }

    public String getSecondaryOption() {
        return secondaryOption;
    }

    public void setSecondaryOption(String secondaryOption) {
        this.secondaryOption = secondaryOption;
    }

    public String getSelectedCity() {
        return selectedCity;
    }

    public void setSelectedCity(String selectedCity) {
        this.selectedCity = selectedCity;
    }

    public String getSelectedDistrict() {
        return selectedDistrict;
    }

    public void setSelectedDistrict(String selectedDistrict) {
        this.selectedDistrict = selectedDistrict;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }
}
