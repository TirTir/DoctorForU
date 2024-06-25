import { mypageInstance } from "../utils";

export const getHealthCareData = async (userId) => {
  // 혈압, 체중
  try {
    const res = await mypageInstance.get(`/healthcare/${userId}`); //1. api-gateway jwt 설정 2. openfeign -> userId
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postHealthCareData = async (userId, data) => {
  try {
    const res = await mypageInstance.post(
      `/healthcare/register/${userId}`,
      data
    );
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const postToGetInquiries = async (data) => {
  // 문의사항
  try {
    const res = await mypageInstance.post("/inquiry/get", data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postInquiriesData = async (data) => {
  try {
    const res = await mypageInstance.post("/inquiry/register", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const postToGetDashboardExercise = async (data) => {
  // 대시보드 운동 기록 불러오기
  try {
    const res = await mypageInstance.post("/exercise/dashboard", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postToGetExercise = async (data) => {
  // DailyHealth 운동 기록 불러오기
  try {
    const res = await mypageInstance.post("/exercise/get", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postRegisterExercise = async (data) => {
  // DailyHealth 운동 기록 등록
  try {
    const res = await mypageInstance.post("/exercise/register", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchExerciseData = async (exerciseName) => {
  try {
    const res = await mypageInstance.get(`/health/exercise/${exerciseName}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
