import React, { useState, useEffect, useRef } from "react";
import { Layout } from "../../components";
import { postEmergency } from "../../api";
import { EmergencyLabel } from "../../components";
import * as S from "./EmergencyHome.styled";

export function EmergencyHome() {
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [cityData, setCityData] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const districtSelectRef = useRef();

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

  const handleClick = async (e) => {
    e.preventDefault();
    const selectedDistrict = districtSelectRef.current.value;
    const data = {
      selectedCity,
      selectedDistrict,
    };

    console.log("Request data: ", data);

    try {
      const result = await postEmergency(data);
      console.log("Response data: ", result);
      setSearchResults(result || []);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <S.Container>
        <S.TitleContainer>
          <h1 style={{ fontSize: "40px" }}>실시간 응급 상황판</h1>
          <S.SearchBar>
            <S.Img src="img/Icon06.png" alt="Icon06" />
            <S.Select value={selectedCity} onChange={handleCityChange}>
              <option value="">시/도</option>
              {Object.keys(cityData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </S.Select>
            <S.Line></S.Line>
            <S.Img src="img/Icon06.png" alt="Icon06" />
            <S.Select ref={districtSelectRef}>
              <option value="">시/군/구</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </S.Select>
            <S.Button onClick={handleClick}>
              <S.Img src="img/Icon08.png" alt="Icon08" />
            </S.Button>
          </S.SearchBar>
        </S.TitleContainer>
        <EmergencyLabel results={searchResults} />
      </S.Container>
    </Layout>
  );
}
