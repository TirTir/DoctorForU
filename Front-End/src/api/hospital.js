import { hospitalInstance } from "../utils";
import { reservationInstance } from "../utils";

export const postHospitals = async (data) => {
  try {
    const response = await hospitalInstance.post("/hospitalsList", data);
    console.log(response.data); // 데이터 출력
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHospitalDetail  = async (hpid) => {
  try {
    const response = await hospitalInstance.get(`/hospitalDetail`, {
      params: { hpid }
    });
    console.log({response}); // 데이터 출력
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 진료 내역
// export const getReservationDetail  = async (hpid) => {
//   try {
//     const response = await reservationInstance.get(`/toMypageForDate`, {
//       params: { hpid }
//     });
//     console.log({response}); // 데이터 출력
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };


// 리액트에서 -> 백엔드로 데이터를 요청하기
// 백엔드에서 리액트