import React, { useState, useEffect } from "react";
import { postHospitals } from "../../../api/hospital";
import HospitalList from "../../../components/hospitalList/HospitalList";
import { KakaoMap, Layout } from "../../../components";

import { departments, institutes } from "../Data";
import * as S from "./HospitalSearch.styled";

const primaryOptions = [
  { value: "department", label: "진료과목" },
  { value: "institute", label: "기관선택" },
];

export function HospitalSearch() {
  const [primaryOption, setPrimaryOption] = useState(""); // 진료 과목
  const [secondaryOptions, setSecondaryOptions] = useState([]); // 항목
  const [selectedCity, setSelectedCity] = useState(""); // 시/도
  const [districts, setDistricts] = useState([]); // 시/군/구
  const [cityData, setCityData] = useState({});
  const [hospitalName, setHospitalName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const storedSearch = sessionStorage.getItem("searchHospital");
    console.log(storedSearch);
    // if (storedSearch) setSearchResults(storedSearch);

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

  const handlePrimaryOptionChange = (e) => {
    const value = e.target.value;
    setPrimaryOption(value);

    if (value === "department") {
      setSecondaryOptions(departments);
    } else if (value === "institute") {
      setSecondaryOptions(institutes);
    } else {
      setSecondaryOptions([]);
    }
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    setDistricts(cityData[value] || []);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      primaryOption,
      secondaryOption: document.querySelectorAll("select")[1].value,
      selectedCity,
      selectedDistrict: document.querySelectorAll("select")[3].value,
      hospitalName,
    };

    console.log("Request data: ", data);

    try {
      const result = await postHospitals(data);
      console.log("Response data: ", result);
      setSearchResults(result || []);
      setCurrentPage(1); // Reset to first page on new search
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = searchResults.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <S.Container>
        <S.TitleContainer>
          <h1 style={{ fontSize: "40px" }}>병원 찾기</h1>
          <S.SearchBar>
            <S.Img src="img/Icon04.png" alt="Icon04" />
            <S.Select
              value={primaryOption}
              onChange={handlePrimaryOptionChange}
            >
              <option value="">진료과목</option>
              {primaryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </S.Select>
            <S.Line></S.Line>
            <S.Img src="img/Icon05.png" alt="Icon05" />
            <S.Select>
              <option value="">항목을 선택하세요</option>
              {secondaryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </S.Select>
            <S.Line></S.Line>
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
            <S.Select>
              <option value="">시/군/구</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </S.Select>
            <S.Line></S.Line>
            <S.Img src="img/Icon07.png" alt="Icon07" />
            <S.Input
              type="text"
              placeholder="병원명을 입력해주세요."
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
            />
            <S.Button onClick={handleClick}>
              <S.Img src="img/Icon08.png" alt="Icon08" />
            </S.Button>
          </S.SearchBar>
        </S.TitleContainer>
        <KakaoMap data={currentItems} />
        <HospitalList
          results={currentItems}
          onPageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </S.Container>
    </Layout>
  );
}
