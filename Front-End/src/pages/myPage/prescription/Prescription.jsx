import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postToGetPrescriptionData } from ".././../../api";
import { PresriptionModal } from "./";

import * as S from "./Prescription.styled";

const getDefaultDateRange = () => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 1);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
  };
};

export function Prescription() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [medication, setMedicationn] = useState({});
  const { startDate, endDate } = getDefaultDateRange();
  const navigate = useNavigate();

  useEffect(() => {
    const certification = sessionStorage.getItem("identify");
    if (certification === null) {
      navigate("/certify");
    }
  }, []);

  const handleGetPrescription = async () => {
    const identity = sessionStorage.getItem("identify");
    const data = {
      userIdentity: identity,
      startDate: startDate,
      endDate: endDate,
    };

    console.log(data);

    const res = await postToGetPrescriptionData(data);
    if (res) setData(res);
    console.log(res);
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
      <PresriptionModal
        isOpen={isOpen}
        closeModal={closeModal}
        medication={medication}
      />
      <S.Container>
        <S.Title>
          <h1 style={{ margin: "2em 0 0 4em" }}>진단 내역</h1>
        </S.Title>
        <S.InfoBox>
          <S.InfoTitle>※ 유의사항</S.InfoTitle>
          <S.InfoList>
            <li>
              본 자료는 병·의원&약국에서 청구한 요양급여비용 명세서를 기준으로
              작성된 자료입니다. 따라서 비급여 진료내역 등 병·의원&약국에서
              청구하지 않은 내역은 포함되어 있지 않습니다.
            </li>

            <li>
              진료비에는 국민건강보험법 제41조의4에 따른 선별급여 관련 금액이
              포함되어 있지 않습니다.
            </li>

            <li>
              이에 본 자료를 단순 참고가 아닌 증빙자료로 사용할 수 없으며,
              이용에 관한 책임은 이용자에게 있습니다.
            </li>

            <li>
              병·의원&약국의 청구 및 건강보험심사평가원의 심사일자 등에 따라
              일부 진료내역이 포함되어 있지 않을 수 있으며, 신청인의 선택에 따라
              일부 정보만 선택 조회가 가능합니다.
            </li>

            <li>
              <span style={{ fontWeight: "bold" }}>
                병·의원(약국)명을 클릭하면 자세한 처방 내역을 확인
              </span>
              할 수 있습니다.
            </li>
          </S.InfoList>
        </S.InfoBox>
        <S.Content>
          <S.SearchTitle>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              진료정보 조회
            </span>
          </S.SearchTitle>
          <S.Form>
            {/* <S.FormGroup>
              <S.FormLabel>병·의원</S.FormLabel>
              <S.FormInput placeholder="병·의원" />
            </S.FormGroup> */}
            <S.FormGroup>
              <S.FormLabel>대상기간</S.FormLabel>
              <S.FormInput type="date" defaultValue={startDate} />
              <span>~</span>
              <S.FormInput type="date" defaultValue={endDate} />
              <S.FormButton onClick={handleGetPrescription}>조회</S.FormButton>
            </S.FormGroup>
          </S.Form>
        </S.Content>
        <S.Content
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "none",
            marginBottom: "50px",
          }}
        >
          <S.Title
            style={{
              justifyContent: "center",
              width: "95%",
              height: "50px",
              marginTop: "40px",
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              병·의원 개인진료정보
            </span>
          </S.Title>
          <S.Table>
            <thead>
              <S.TableRow>
                <S.TableHeader>병·의원 명</S.TableHeader>
                <S.TableHeader>진료개시일</S.TableHeader>
                <S.TableHeader>진료형태</S.TableHeader>
                <S.TableHeader>입원일수</S.TableHeader>
                <S.TableHeader>처방횟수</S.TableHeader>
                <S.TableHeader>복용기간</S.TableHeader>
              </S.TableRow>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <S.TableRow>
                  <S.TableCell colSpan="7">
                    <S.EmptyMessage>검색된 내용이 없습니다.</S.EmptyMessage>
                  </S.TableCell>
                </S.TableRow>
              ) : (
                data.map((item) => (
                  <S.TableRow key={item.id}>
                    <S.TableCell
                      style={{
                        pointer: "cursor",
                        color: "red",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                      onClick={() => {
                        setMedicationn(item.medicationId);
                        openModal();
                      }}
                    >
                      {item.hospitalName}
                    </S.TableCell>
                    <S.TableCell>{item.treatStartDate}</S.TableCell>
                    <S.TableCell>{item.medicationId.diseaseId}</S.TableCell>
                    <S.TableCell>{item.visitDays}</S.TableCell>
                    <S.TableCell>{item.prescribeCnt}</S.TableCell>
                    <S.TableCell>{item.medicationId.prescribeDays}</S.TableCell>
                  </S.TableRow>
                ))
              )}
            </tbody>
          </S.Table>
        </S.Content>
      </S.Container>
    </>
  );
}
