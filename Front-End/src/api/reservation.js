import { mypageInstance, reservationInstance } from "../utils";

export const getHospitalReservation = async (hpid) => {
  // 병원 별 예약 가능 타임테이블
  try {
    const res = await reservationInstance.get("/toMypageForDate", {
      params: { hpid },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFastReservation = async (data) => {
  // 빠른 예약
  try {
    const res = await reservationInstance.post("/fastReservation", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postToGetReservation = async (data) => {
  // 예약 내역
  try {
    const res = await mypageInstance.post("/reservation/get", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postHospitalReservation = async (data) => {
  // 예약 등록
  try {
    const res = await mypageInstance.post("/reservation/register", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const deleteHospitalReservation = async (reservationId) => {
  // 예약 취소
  try {
    const res = await mypageInstance.delete(`/reservation/${reservationId}`);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};
