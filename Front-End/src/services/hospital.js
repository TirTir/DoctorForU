export const getHospital = (hospital) => {
  return hospital.map(({ id, name, address, phone, specialty, rating }) => {
    return {
      id: id,
      name: name,
      address: address,
      phone: phone ? phone : "",
      speciality: specialty ? specialty : "",
      rating: rating,
    };
  }); // 데이터 정제
};

// 백엔드에서 받아온 데이터를 객체형식으로 옴 (이걸 사용가능한 데이터로 변환하는 기능)
// 변환한 놈들을 
