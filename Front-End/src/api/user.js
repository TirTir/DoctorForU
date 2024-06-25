import { authInstance, onLoginSuccess } from "../utils";

export const getCheckDuplicateId = async (data) => {
  // 아이디 중복 확인
  try {
    const res = await authInstance.get(`/register/${data}`);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const postVerificationEmail = async (data) => {
  // 인증 코드 요청
  try {
    const res = await authInstance.post("/verify-email", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const postVerificationCode = async (data) => {
  // 인증 코드 확인
  try {
    console.log(data);
    const res = await authInstance.post("/verification-code", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const postJoin = async (data) => {
  try {
    const res = await authInstance.post("/join", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error.response);
  }
};

export const postLogin = async (data) => {
  // 로그인
  try {
    const res = await authInstance.post("/login", data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (userId) => {
  // 내 정보 요청
  try {
    const res = await authInstance.get(`/userinfo/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postUserUpdate = async (userId, data) => {
  // 내 정보 수정 요청
  try {
    const res = await authInstance.post(`/updateuser/${userId}`, data);
    return res.data.isSuccess;
  } catch (error) {
    console.log(error);
  }
};
