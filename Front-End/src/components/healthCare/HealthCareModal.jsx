import ReactModal from "react-modal";
import { postHealthCareData } from "../../api";
import { useState } from "react";

import * as S from "./HealthCare.styled";

export function Modal({ isOpen, closeModal }) {
  const [form, setForm] = useState({
    systolic: "",
    diastolic: "",
    weight: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // 숫자만 허용하는 정규 표현식 적용
    const filteredValue = value.replace(/[^0-9]/g, "");
    setForm((prevForm) => ({
      ...prevForm,
      [name]: filteredValue,
    }));
  };

  const onSubmit = async () => {
    const userId = sessionStorage.getItem("userId");
    const data = {
      systolic: form.systolic,
      diastolic: form.diastolic,
      weight: form.weight,
    };

    console.log(data);
    const res = await postHealthCareData(userId, data);
    if (res) closeModal();
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "40em",
      height: "370px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <h2 style={{ fontWeight: "bold" }}>건강정보관리</h2>
      <S.InputForm>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <S.InputBox>
            <S.Input
              name="systolic"
              placeholder="최고(mmHg)"
              onChange={handleInputChange}
              value={form.systolic}
              type="text"
            />
          </S.InputBox>
          <span>/</span>
          <S.InputBox>
            <S.Input
              name="diastolic"
              placeholder="최저(mmHg)"
              onChange={handleInputChange}
              value={form.diastolic}
              type="text"
            />
          </S.InputBox>
        </div>

        <S.InputBox style={{ width: "320px" }}>
          <S.Input
            name="weight"
            placeholder="체중(kg)"
            onChange={handleInputChange}
            value={form.weight}
            type="text"
          />
        </S.InputBox>
      </S.InputForm>

      <S.ModalButton>
        <S.Button
          primary
          onClick={() => {
            onSubmit();
          }}
        >
          저장
        </S.Button>
        <S.Button
          onClick={() => {
            closeModal();
          }}
        >
          취소
        </S.Button>
      </S.ModalButton>
    </ReactModal>
  );
}
