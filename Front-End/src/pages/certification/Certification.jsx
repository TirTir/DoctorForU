import { useState } from "react";
import { Layout } from "../../components/common";
import { useNavigate } from "react-router-dom";

import * as S from "./Certification.styled";

export function Certification() {
  const [identify, setIdentify] = useState("");
  const navigate = useNavigate();

  const handleIdentifyChange = (e, part) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    let identifyParts = identify.split("-");
    if (part === 0) {
      identifyParts[0] = value;
    } else {
      identifyParts[1] = value;
    }
    setIdentify(identifyParts.join("-"));
  };

  const onSubmit = () => {
    const [firstPart, secondPart] = identify.split("-");

    if (firstPart.length !== 6 || secondPart.length !== 7) {
      alert("주민등록번호를 입력해주세요.");
    }

    sessionStorage.setItem("identify", identify);
    navigate("/mypage/prescription")
  };

  return (
    <Layout>
      <S.Container>
        <S.TitleContainer>
          <h1 style={{ marginTop: "2em" }}>본인 인증</h1>
        </S.TitleContainer>
        <S.InfoBox>
          <S.InfoTitle>개인진료정보란?</S.InfoTitle>
          <p>
            국민건강보험법 시행규칙 제19조제1항에 따른 요양급여비용명세서에
            기재된 요양급여를 받은 사람(정보주체)의 진료에 관한 정보(요양개시일,
            본인부담금 및 비용청구액 등)
          </p>
          <S.InfoTitle style={{ marginTop: "10px" }}>열람 법적근거</S.InfoTitle>
          <p>ㆍ「국민건강보험법 시행규칙」 제19조(요양급여비용의 청구)</p>
          <p>ㆍ「개인정보보호법」 및 동법 시행규칙</p>
          <p>ㆍ「자동차손해배상보장법」제12조의2, 같은법 시행령 제11조의2</p>
        </S.InfoBox>
        <S.InputContainer>
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            주민등록번호를 입력 후 인증하기 버튼을 눌러주세요.
          </span>
          <S.InputForm>
            <S.Label>
              주민등록번호<S.Required>*</S.Required>
            </S.Label>
            <S.InputBox>
              <S.Input
                onChange={(e) => handleIdentifyChange(e, 0)}
                value={identify.split("-")[0] || ""}
                placeholder="주민번호 앞자리"
              />
            </S.InputBox>

            <span style={{ margin: "10px" }}>-</span>
            <S.InputBox>
              <S.Input
                onChange={(e) => handleIdentifyChange(e, 1)}
                value={identify.split("-")[1] || ""}
                placeholder="주민번호 뒷자리"
                type="password"
              />
            </S.InputBox>
          </S.InputForm>
        </S.InputContainer>
        <S.Button onClick={onSubmit}>인증하기</S.Button>
      </S.Container>
    </Layout>
  );
}
