package com.example.HospitalService.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HospitalData {
    private String dutyAddr;
    private String dutyDiv;
    private String dutyDivNam;
    private String dutyName;
    private String dutyTel1;
    private String dutyTime1c;
    private String dutyTime1s;

    private String dutyTime2c;
    private String hpid;

    private String wgs84Lat;
    private String wgs84Lon;

    // Getters and Setters
    public String getDutyAddr() {
        return dutyAddr;
    }

    public void setDutyAddr(String dutyAddr) {
        this.dutyAddr = dutyAddr;
    }

    public String getDutyDiv() {
        return dutyDiv;
    }

    public void setDutyDiv(String dutyDiv) {
        this.dutyDiv = dutyDiv;
    }

    public String getDutyDivNam() {
        return dutyDivNam;
    }

    public void setDutyDivNam(String dutyDivNam) {
        this.dutyDivNam = dutyDivNam;
    }

    public String getDutyName() {
        return dutyName;
    }

    public void setDutyName(String dutyName) {
        this.dutyName = dutyName;
    }

    public String getDutyTel1() {
        return dutyTel1;
    }

    public void setDutyTel1(String dutyTel1) {
        this.dutyTel1 = dutyTel1;
    }

    public String getDutyTime1c() {
        return dutyTime1c;
    }

    public void setDutyTime1c(String dutyTime1c) {
        this.dutyTime1c = dutyTime1c;
    }

    public String getDutyTime1s() {
        return dutyTime1s;
    }

    public void setDutyTime1s(String dutyTime1s) {
        this.dutyTime1s = dutyTime1s;
    }

    public String getWgs84Lat() {
        return wgs84Lat;
    }

    public void setWgs84Lat(String wgs84Lat) {
        this.wgs84Lat = wgs84Lat;
    }

    public String getWgs84Lon() {
        return wgs84Lon;
    }

    public void setWgs84Lon(String wgs84Lon) {
        this.wgs84Lon = wgs84Lon;
    }
}

