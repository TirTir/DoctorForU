import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { postToGetReservation } from "../../api";
import { Calendar } from "../calendar";
import { ScheduledReservationModal } from "./ScheduledReservationModal";
import * as S from "./ScheduledReservation.styled";

export function ScheduledReservation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [data, setData] = useState([]); // 예약 내역 데이터
  const navigate = useNavigate();

  useEffect(() => {
    handelGetReservation();
  }, [isOpen]);

  const handelGetReservation = async () => {
    // 예약 내역
    const userId = sessionStorage.getItem("userId");
    const data = {
      userId: userId,
    };
    const res = await postToGetReservation(data);
    console.log(res);
    if (res) setData(res);
  };

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  return (
    <>
      <ScheduledReservationModal
        isOpen={isOpen}
        closeModal={closeModal}
        reservationList={data}
        handelGetReservation={handelGetReservation}
      />
      <S.CalendarContainer>
        <p style={{ fontWeight: "bold" }}>진료예정</p>
        <S.Line></S.Line>
        <Calendar setSelectedDay={setSelectedDay} />
        <S.CalendarButtons>
          <S.Button
            primary
            onClick={() => {
              navigate("/hospital-search");
            }}
          >
            예약하기
          </S.Button>
          <S.Button onClick={openModal}>변경 및 취소</S.Button>
        </S.CalendarButtons>
      </S.CalendarContainer>
    </>
  );
}
