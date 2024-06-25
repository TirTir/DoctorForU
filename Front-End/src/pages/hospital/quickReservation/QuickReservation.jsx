import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../../components";
import { departments } from "../Data";
import { getFastReservation } from "../../../api";

import * as S from "./QuickReservation.styled";
import { ReservationList } from "../../../components";

// const exampleDataList = [
//   {
//     dutyName: "서울대학교병원",
//     dutyAddr: "서울특별시 종로구 대학로 101",
//     dutyTel1: "02-2072-2114",
//     dutyTime1s: "09:00",
//     dutyTime1c: "18:00",
//   },
//   {
//     dutyName: "서울대학교병원",
//     dutyAddr: "서울특별시 종로구 대학로 101",
//     dutyTel1: "02-2072-2114",
//     dutyTime1s: "09:00",
//     dutyTime1c: "18:00",
//   },
// ];

export function QuickReservation() {
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [cityData, setCityData] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (userId === null) {
      alert("로그인 후 이용가능한 서비스입니다.");
      navigate("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/city_data.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.reduce((acc, { sido, sigungu }) => {
          if (!acc[sido]) acc[sido] = new Set();
          acc[sido].add(sigungu);
          return acc;
        }, {});
        for (let key in formattedData) {
          formattedData[key] = Array.from(formattedData[key]);
        }
        setCityData(formattedData);
      });
  }, []);

  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    setDistricts(cityData[value] || []);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    const data = {
      secondaryOption: document.querySelectorAll("select")[0].value,
      selectedCity,
      selectedDistrict: document.querySelectorAll("select")[2].value,
    };
    console.log(data);

    const res = await getFastReservation(data);
    setSearchResults(res || []);
  };

  return (
    <Layout>
      <S.Container>
        <h1 style={{ fontSize: "40px" }}>빠른 예약</h1>
        <S.InfoBox>
          <S.InfoTitle>DoctorForU가 빠른 예약을 도와드리겠습니다.</S.InfoTitle>
          <S.InfoList>
            <li>병원 점심시간 제외 30분 간격으로 예약가능합니다.</li>
            <li>코로나 검사관련 사항은 예약불가합니다.</li>
            <li>주말 및 공휴일은 예약 불가합니다.</li>
          </S.InfoList>
        </S.InfoBox>
        <div
          style={{ display: "flex", alignItems: "flex-start", width: "62%" }}
        >
          <S.SearchBar>
            <S.Img src="/img/Icon04.png" alt="Icon04" />
            <S.Select>
              <option value="">진료과목</option>
              {departments.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </S.Select>
            <S.Line></S.Line>
            <S.Img src="/img/Icon06.png" alt="Icon06" />
            <S.Select value={selectedCity} onChange={handleCityChange}>
              <option value="">시/도</option>
              {Object.keys(cityData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </S.Select>
            <S.Line></S.Line>
            <S.Img src="/img/Icon06.png" alt="Icon06" />
            <S.Select>
              <option value="">시/군/구</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </S.Select>
            <S.Button onClick={onSearch}>
              <S.Img src="/img/Icon08.png" alt="Icon08" />
            </S.Button>
          </S.SearchBar>
        </div>
        <ReservationList searchResults={searchResults} />
      </S.Container>
    </Layout>
  );
}
