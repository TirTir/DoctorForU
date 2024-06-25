// hospitalData.js
export const basicInfo = {
  labels: ["진료과목", "진료가능시간", "기관설명상세", "응급실운영여부"],
  fields: ["dgidIdName", "dutyTime", "dutyInf", "dutyEryn"],
};

export const bedInfo = [
  { label: "일반병상", field: "hpbdn" },
  { label: "응급실", field: "hperyn" },
  { label: "입원실", field: "hpgryn" },
  { label: "수술실", field: "hvoc" },
  { label: "일반중환자실", field: "hpicuyn" },
  { label: "흉부중환자실", field: "hpccuyn" },
  { label: "신경중환자실", field: "hpcuyn" },
];

export const surgeryInfo = [
  { label: "응급수술", field: "o001" },
  { label: "뇌출혈수술", field: "mkioskTy1" },
  { label: "뇌경색수술", field: "mkioskTy2" },
  { label: "심근경색수술", field: "mkioskTy3" },
  { label: "복부손상의수술", field: "mkioskTy4" },
  { label: "사지접합의수술", field: "mkioskTy5" },
  { label: "응급내시경", field: "mkioskTy6" },
  { label: "응급투석", field: "mkioskTy7" },
  { label: "조산산모", field: "mkioskTy8" },
  { label: "정신질환수술", field: "mkioskTy9" },
  { label: "신생아응급수술", field: "mkioskTy10" },
  { label: "중증화상수술", field: "mkioskTy11" },
];

export const emergencyInfo = [
  { label: "응급실 일반병상", field: "o001" },
  { label: "응급실 소아 병상", field: "o002" },
  { label: "응급실 음압격리 병상", field: "o003" },
  { label: "응급실 일반격리 병상", field: "o004" },
  { label: "응급전용 중환자실", field: "o005" },
  { label: "내과중환자실", field: "o006" },
  { label: "외과중환자실", field: "o007" },
  { label: "신생아중환자실", field: "o008" },
  { label: "소아 중환자실", field: "o009" },
  { label: "소아응급전용 중환자실 병상", field: "o010" },
  { label: "신경과중환자실", field: "o011" },
  { label: "신경외과중환자실", field: "o012" },
  { label: "화상중환자실", field: "o013" },
  { label: "외상중환자실", field: "o014" },
  { label: "심장내과 중환자실", field: "o015" },
  { label: "흉부외과 중환자실", field: "o016" },
  { label: "일반 중환자실", field: "o017" },
  { label: "중환자실 내 음압격리 병상", field: "o018" },
  { label: "응급전용 입원실", field: "o019" },
  { label: "소아응급전용 입원 병상", field: "o020" },
  { label: "외상전용 입원실", field: "o021" },
  { label: "수술실", field: "o022" },
  { label: "외상전용 수술실", field: "o023" },
  { label: "정신과 폐쇄 병상", field: "o024" },
  { label: "음압 격리 병상", field: "o025" },
];

export const equipmentInfo = [
  { label: "분만실", field: "o026" },
  { label: "CT", field: "o027" },
  { label: "MRI", field: "o028" },
  { label: "혈관촬영기", field: "o029" },
  { label: "인공호흡기", field: "o030" },
  { label: "인공호흡기(소아)", field: "o031" },
  { label: "인큐베이터", field: "o032" },
  { label: "CRRT", field: "o033" },
  { label: "ECMO", field: "o034" },
  { label: "치료적 저체온 요법", field: "o035" },
  { label: "화상전용 처치실", field: "o036" },
  { label: "고압산소치료기", field: "o037" },
];
