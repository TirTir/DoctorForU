package com.example.HospitalService.dto;

import lombok.Data;

@Data
public class HospitalDetailData {
    //////기본정보/////////////////////////////////////////////////
    private String hpid; // 기관 id
    private String dutyName; // 병원명
    private String dutyAddr; // 주소
    private String dutyTel1; // 대표전화
    private String dutyTel3; // 응급실 전화
    private String hvec; // 응급실
    private String hvoc; // 수술실
    private String hvgc; // 입원실

    private String dutyHayn; // 입원실가용여부(1/2) 1:가능,그외:''
    private String dutyHano; // 병상 수
    private String dutyInf; // 기관설명상세
    private String dutyEryn; // 응급실운영여부(1/2) -> 1이면 하는 것

    private String dutyTime1c; // 진료시간(월요일)C
    private String dutyTime2c; // 진료시간(화요일)C
    private String dutyTime3c; // 진료시간(수요일)C
    private String dutyTime4c; // 진료시간(목요일)C
    private String dutyTime5c; // 진료시간(금요일)C
    private String dutyTime6c; // 진료시간(토요일)C
    private String dutyTime7c; // 진료시간(일요일)C
    private String dutyTime8c; // 진료시간(공휴일)C
    private String dutyTime1s; // 진료시간(월요일)S
    private String dutyTime2s; // 진료시간(화요일)S
    private String dutyTime3s; // 진료시간(수요일)S
    private String dutyTime4s; // 진료시간(목요일)S
    private String dutyTime5s; // 진료시간(금요일)S
    private String dutyTime6s; // 진료시간(토요일)S
    private String dutyTime7s; // 진료시간(일요일)S
    private String dutyTime8s; // 진료시간(공휴일)S

    private String wgs84Lon; // 병원경도
    private String wgs84Lat; // 병원위도
    private String dgidIdName; // 진료과목

    ///////////////////////////////////////////////////////////////
    //병상 확인 /////////////////////////////////////////////////////
    private String hpbdn; // 병상수
    private String hpccuyn; // 흉부중환자실
    private String hpcuyn; // 신경중환자실
    private String hperyn; // 응급실
    private String hpgryn; // 입원실
    private String hpicuyn; // 일반중환자실
    private String hpnicuyn; // 신생아중환자실
    private String hpopyn; // 수술실
    /////////////////////////////////////////////////////////////////

    // 수술가능여부 /////////////////////////////////////////////////////
    private String MKioskTy25; // 응급실(Emergency gate keeper) -> Y:가능,N:불가 ->  이거 Y일때 아래 응급데이터 받을 수 있게 하기
    private String MKioskTy1; // 뇌출혈수술
    private String MKioskTy2; // 뇌경색의재관류
    private String MKioskTy3; // 심근경색의재관류
    private String MKioskTy4; // 복부손상의수술
    private String MKioskTy5; // 사지접합의수술
    private String MKioskTy6; // 응급내시경
    private String MKioskTy7; // 응급투석
    private String MKioskTy8; // 조산산모
    private String MKioskTy9; // 정신질환자
    private String MKioskTy10; // 신생아
    private String MKioskTy11; // 중증화상

    ///////////////////////////응급실 상황판 - 병상 ////////////////////////////////////////////////
    private String o001; // 응급실 일반병상
    private String o002; // 응급실 소아 병상
    private String o003; // 응급실 음압 격리 병상
    private String o004; // 응급실 일반 격리 병상
    private String o005; // 응급전용 중환자실
    private String o006; // 내과중환자실
    private String o007; // 외과중환자실
    private String o008; // 신생아중환자실
    private String o009; // 소아 중환자실
    private String o010; // 소아응급전용 중환자실 병상
    private String o011; // 신경과중환자실
    private String o012; // 신경외과중환자실
    private String o013; // 화상중환자실
    private String o014; // 외상중환자실
    private String o015; // 심장내과 중환자실
    private String o016; // 흉부외과 중환자실
    private String o017; // 일반 중환자실
    private String o018; // 중환자실 내 음압 격리 병상
    private String o019; // 응급전용 입원실
    private String o020; // 소아응급전용 입원 병상
    private String o021; // 외상전용 입원실
    private String o022; // 수술실
    private String o023; // 외상전용 수술실
    private String o024; // 정신과 폐쇄 병상
    private String o025; // 음압 격리 병상

    ///////////////////////////////////////////////////////////////////////////////
    ////////////// 사용가능한 장비 ///////////////////////////////////////////////////
    private String o026; // 분만실
    private String o027; // CT
    private String o028; // MRI
    private String o029; // 혈관촬영기
    private String o030; // 인공호흡기
    private String o031; // 인공호흡기(소아)
    private String o032; // 인큐베이터
    private String o033; // CRRT
    private String o034; // ECMO
    private String o035; // 치료적 저체온 요법
    private String o036; // 화상전용 처치실
    private String o037; // 고압산소치료기
    private String o038; // 일반입원실



















}
