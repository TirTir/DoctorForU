import { emergencyInstance } from "../utils";


export const postEmergency = async (data) => {
  try {
    const response = await emergencyInstance.post("/emergencyList", data);
    console.log(response.data); // 데이터 출력
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEmergencyMessage  = async (hpid) => {
  try {
    const response = await emergencyInstance.get(`/emergencyMessage`, {
      params: { hpid }
    });
    console.log({response}); // 데이터 출력
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
