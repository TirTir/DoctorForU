import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, Layout, ReservationTimetable } from "../../../components";
import { getHospitalReservation } from "../../../api";
import { KakaoMap2 } from "../../../components/kakaoMap/KakaoMap2";

//import { exampleData } from "./Data";
import * as S from "./HospitalReservation.styled";

export function HospitalReservation() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [data, setData] = useState({}); // 타임테이블

  const params = useParams();

  useEffect(() => {
    handleReservation();
  }, []);

  const handleReservation = async () => {
    // 병원 별 예약 가능 타임테이블
    const res = await getHospitalReservation(params.hpid);
    console.log(res);
    if (res) {
      setData(res);
    } // else setData(exampleData);
  };

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <h1 style={{ fontSize: "40px" }}>진료 예약</h1>
          <S.InfoContainer>
            <S.Img src="/img/Icon21.png" alt="Icon21" />
            <div style={{ marginLeft: "20px" }}>
              <h2>{data.dutyName}</h2>
              <span>주소: {data.dutyAddr}</span>
              <p>전화번호: {data.dutyTel1}</p>
              <span>
                진료 시간: {data.dutyTime1c} - {data.dutyTime1s}
              </span>
            </div>
          </S.InfoContainer>
          <S.ReservationContainer>
            <Calendar setSelectedDay={setSelectedDay} />
            <ReservationTimetable selectedDay={selectedDay} data={data} />
          </S.ReservationContainer>
        </S.Content>
        <KakaoMap2 data={data} />
      </S.Container>
    </Layout>
  );
}
