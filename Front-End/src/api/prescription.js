import { mypageInstance } from "../utils";

export const postToGetPrescriptionData = async (data) => {
  // 진단 내역
  try {
    const res = await mypageInstance.post(`/callGetTreat`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postToGetMedicationData = async (data) => {
  // 진단 내역
  try {
    const res = await mypageInstance.post(`/callGetTreat`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};