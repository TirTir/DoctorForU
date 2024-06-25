import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../../components";
import { getHospitalDetail } from "../../../api";

import {
  basicInfo,
  bedInfo,
  surgeryInfo,
  emergencyInfo,
  equipmentInfo,
} from "./Data";

import * as S from "./HospitalDetail.styled";

export function HospitalDetail() {
  const [hospitalData, setHospitalData] = useState(null);
  const [activeTab, setActiveTab] = useState("basic");
  const [error, setError] = useState(null);
  const params = useParams(); // 이게 현재 HPID

  const handleHospitalDetail = async () => {
    try {
      console.log(`Fetching data for HPID: ${params.hpid}`);
      const data = await getHospitalDetail(params.hpid);
      console.log("Received data:", data);
      if (data) {
        setHospitalData(data); // 데이터를 단일 객체로 처리
      } else {
        throw new Error("잘못된 요청입니다.");
      }
    } catch (error) {
      console.error("Error fetching hospital detail:", error);
      setError(error.message || "데이터를 가져오는 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    handleHospitalDetail();
  }, [params.hpid]);

  const sectionTitles = {
    basic: "기본정보",
    beds: "병상정보",
    surgery: "수술가능여부",
    emergency: "실시간 응급 상황",
    equipment: "가용가능 장비현황",
  };

  const renderValue = (value) => {
    if (value === "Y") return "가능";
    if (value === "N") return "불가";
    return value ? value : "정보 없음";
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!hospitalData) {
    return <div>Loading...</div>;
  }

  const renderSection = (sectionData, title) => {
    return (
      <S.Section>
        <h3>{title}</h3>
        <S.CardsContainer>
          {sectionData.map((item, index) => (
            <S.Card key={index}>
              <h4>{item.label}</h4>
              <p>{renderValue(hospitalData[item.field])}</p>
            </S.Card>
          ))}
        </S.CardsContainer>
      </S.Section>
    );
  };

  return (
    <Layout>
      <S.Container>
        <h1>병원 상세정보</h1>
        <S.Section
          style={{
            border: "1px solid #dde0fc",
            borderRadius: "10px",
            width: "80%",
            padding: "20px",
          }}
        >
          <S.HospitalInfo>
            <h2>
              {hospitalData.dutyName}{" "}
              <span className="hospital-type">응급진료병원</span>
            </h2>
            <li>{hospitalData.dutyTel1}</li>
            <li>{hospitalData.dutyAddr}</li>
          </S.HospitalInfo>
        </S.Section>
        <S.TabNav>
          <button
            className={activeTab === "basic" ? "active" : ""}
            onClick={() => setActiveTab("basic")}
          >
            기본정보
          </button>
          <button
            className={activeTab === "beds" ? "active" : ""}
            onClick={() => setActiveTab("beds")}
          >
            병상정보
          </button>
          <button
            className={activeTab === "surgery" ? "active" : ""}
            onClick={() => setActiveTab("surgery")}
          >
            수술가능여부
          </button>
          <button
            className={activeTab === "emergency" ? "active" : ""}
            onClick={() => setActiveTab("emergency")}
          >
            실시간 응급 상황
          </button>
          <button
            className={activeTab === "equipment" ? "active" : ""}
            onClick={() => setActiveTab("equipment")}
          >
            가용가능 장비현황
          </button>
        </S.TabNav>
        <S.Line></S.Line>
        {activeTab === "basic" && (
          <>
            <S.InfoSection>
              <div>
                <S.Title>진료과목</S.Title>
                <span>{hospitalData.dgidIdName}</span>
                <S.Title style={{ marginTop: "30px" }}>
                  기관설명상세: {hospitalData.dutyInf}
                </S.Title>
                <S.Title>
                  응급실운영여부: {renderValue(hospitalData.dutyEryn)}
                </S.Title>
              </div>
            </S.InfoSection>
            <S.InfoSection>
              <div>
                <S.Title>진료가능시간</S.Title>
                <p>
                  월요일: {hospitalData.dutyTime1s} - {hospitalData.dutyTime1c}
                </p>
                <p>
                  화요일: {hospitalData.dutyTime2s} - {hospitalData.dutyTime2c}
                </p>
                <p>
                  수요일: {hospitalData.dutyTime3s} - {hospitalData.dutyTime3c}
                </p>
                <p>
                  목요일: {hospitalData.dutyTime4s} - {hospitalData.dutyTime4c}
                </p>
                <p>
                  금요일: {hospitalData.dutyTime5s} - {hospitalData.dutyTime5c}
                </p>
                <p>
                  토요일: {hospitalData.dutyTime6s} - {hospitalData.dutyTime6c}
                </p>
                <p>
                  공휴일: {hospitalData.dutyTime7s} - {hospitalData.dutyTime7c}
                </p>
              </div>
            </S.InfoSection>
          </>
        )}
        {activeTab === "beds" && renderSection(bedInfo, sectionTitles.beds)}
        {activeTab === "surgery" &&
          renderSection(surgeryInfo, sectionTitles.surgery)}
        {activeTab === "emergency" &&
          renderSection(emergencyInfo, sectionTitles.emergency)}
        {activeTab === "equipment" &&
          renderSection(equipmentInfo, sectionTitles.equipment)}
      </S.Container>
    </Layout>
  );
}
