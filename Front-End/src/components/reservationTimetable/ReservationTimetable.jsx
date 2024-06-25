import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postHospitalReservation } from "../../api";
import dayjs from "dayjs";

import * as S from "./ReservationTimetable.styled";
import { KakaoMap2 } from "../kakaoMap/KakaoMap2";

export function ReservationTimetable({ selectedDay, data }) {
  const [selectedReservations, setSelectedReservations] = useState([]);
  const navigate = useNavigate();

  const onReservation = async (time) => {
    const userId = sessionStorage.getItem("userId");
    if (userId === null) {
      alert("로그인 후 이용가능한 서비스입니다.");
      navigate("/auth/login");
    }

    const reserveDate = dayjs(selectedDay).format("YYYY-MM-DD");
    const reservationData = {
      userId: userId,
      hpid: data.hpid,
      dutyName: data.dutyName,
      reserveDate: reserveDate,
      reserveTime: time,
    };
    console.log(reservationData);

    const res = await postHospitalReservation(reservationData);
    if (res) {
      alert("예약 완료되었습니다.");
      navigate("/mypage/dashboard");
    } else alert("잘못된 요청입니다.");
  };

  useEffect(() => {
    handleSelectReservation();
  }, [selectedDay]);

  const handleSelectReservation = () => {
    // 선택 날짜 -> 예약 가능한 타임테이블
    const dayOfWeek = dayjs(selectedDay).format("dddd").toLowerCase(); // 요일 출력
    const reservations = data[dayOfWeek] || []; // 요일 선택
    setSelectedReservations(reservations);
  };

  return (
    <S.Container>
      <h3>예약 시간</h3>
      <S.Line></S.Line>
      <S.Table>
        {selectedReservations.map((item, index) => (
          <S.TableRow key={index}>
            <S.TableCell>{item}</S.TableCell>
            <S.TableCell>
              <S.Button
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
    </S.Container>
  );
}
