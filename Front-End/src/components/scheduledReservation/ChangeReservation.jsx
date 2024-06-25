import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import dayjs from "dayjs";

import {
  getHospitalReservation,
  postHospitalReservation,
  deleteHospitalReservation,
} from "../../api";
import * as S from "./ScheduledReservation.styled";

export function ChangeReservation({ setIsClick, item }) {
  const [selectedDate, setSelectedDate] = useState({
    year: {
      value: new Date().getFullYear(),
      label: `${new Date().getFullYear()}년도`,
    },
    month: {
      value: new Date().getMonth() + 1,
      label: `${new Date().getMonth() + 1}월`,
    },
    day: { value: new Date().getDate(), label: `${new Date().getDate()}일` },
  });

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => ({
      value: currentYear - i,
      label: `${currentYear - i}년도`,
    }));
  };

  const getMonths = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}월`,
    }));
  };

  const getDays = (year, month) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}일`,
    }));
  };

  const updateDateState = (name, value) => {
    // 날짜 선택시 반환
    setSelectedDate((prevState) => {
      const newDate = { ...prevState, [name]: value };
      formatDateString(
        newDate.year.value,
        newDate.month.value,
        newDate.day.value
      );
      return newDate;
    });
  };

  const formatDateString = (year, month, day) => {
    const formatted = `${year}-${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    setFormattedDate(formatted);
  };

  const years = getYears();
  const months = getMonths();
  const days = getDays(selectedDate.year.value, selectedDate.month.value);

  const customStyles = {
    container: (provided) => ({ ...provided, width: "130px" }),
    control: (provided) => ({ ...provided, height: "40px" }),
  };

  //////////////////////////////////////////////////////////////////////
  const [data, setData] = useState({}); // 예약 가능한 타임테이블 데이터
  const [formattedDate, setFormattedDate] = useState(""); // yy-mm-dd
  const [selectedReservations, setSelectedReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleReservation();
  }, []);

  const handleReservation = async () => {
    // 병원 별 예약 가능 타임테이블
    const res = await getHospitalReservation(item.hpid);
    if (res) {
      setData(res);
    }
  };

  useEffect(() => {
    handleSelectReservation();
  }, [formattedDate]);

  const handleSelectReservation = () => {
    // 선택 날짜 -> 예약 가능한 타임테이블
    const dayOfWeek = dayjs(formattedDate).format("dddd").toLowerCase(); // 요일 출력
    const reservations = data[dayOfWeek] || []; // 요일 선택
    setSelectedReservations(reservations);
    console.log("날짜: " + formattedDate);
    console.log("예약 테이블: " + selectedReservations);
  };

  const onReservation = async (time) => {
    const userId = sessionStorage.getItem("userId");
    if (userId === null) {
      alert("로그인 후 이용가능한 서비스입니다.");
      navigate("/auth/login");
    }

    const reserveDate = dayjs(formattedDate).format("YYYY-MM-DD");
    const data = {
      userId: userId,
      hpid: item.hpid,
      dutyName: item.dutyName,
      reserveDate: reserveDate,
      reserveTime: time,
    };

    const res = await postHospitalReservation(data);
    if (res) {
      const del = await deleteHospitalReservation(item.id);
      console.log("삭제: " + item.id);
      if (del) {
        alert("예약 변경되었습니다.");
        setIsClick(false);
      } else alert("잘못된 요청입니다.");
    }
  };

  return (
    <>
      <S.SelectContainer>
        <Select
          styles={customStyles}
          name="year"
          id="year"
          onChange={(option) => updateDateState("year", option)}
          value={selectedDate.year}
          options={years}
          placeholder="년도"
        />
        <Select
          styles={customStyles}
          id="month"
          onChange={(option) => updateDateState("month", option)}
          value={selectedDate.month}
          options={months}
          placeholder="월"
        />
        <Select
          styles={customStyles}
          name="day"
          id="day"
          onChange={(option) => updateDateState("day", option)}
          value={selectedDate.day}
          options={days}
          placeholder="일"
        />
      </S.SelectContainer>
      <S.TimeContainer>
        <S.Line></S.Line>
        <S.Table>
          {selectedReservations.map((item, index) => (
            <S.TableRow key={index}>
              <S.TableCell style={{ padding: "0" }}>{item}</S.TableCell>
              <S.TableCell style={{ padding: "0" }}>
                <S.Button
                  primary
                  onClick={() => {
                    onReservation(item);
                  }}
                >
                  예약하기
                </S.Button>
              </S.TableCell>
            </S.TableRow>
          ))}
        </S.Table>
      </S.TimeContainer>
    </>
  );
}
