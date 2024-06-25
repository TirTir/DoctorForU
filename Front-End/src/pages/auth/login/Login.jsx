import { useState } from "react";
import { Layout } from "../../../components/common";
import { Google, Kakao } from "../../../components/auth";
import { postLogin } from "../../../api";

import * as S from "./Login.styled";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userId: "",
    userPassword: "",
  });

  const onSubmit = async () => {
    //로그인
    const data = {
      userId: form.userId,
      userPassword: form.userPassword,
    };
    const res = await postLogin(data);
    console.log(data);
    if (res) {
      alert(`${form.userId}님 환영합니다`);
      sessionStorage.setItem("userId", form.userId);
      navigate("/");
    } else alert("로그인이 실패하였습니다.");
  };

  return (
    <Layout>
      <S.Container>
        <S.LoginInfo>
          <h1 style={{ fontSize: "40px" }}>로그인</h1>
          <div style={{ fontSize: "15px", fontWeight: "bold" }}>
            DoctorForU에 오신 것을 환영합니다.
          </div>
          <p style={{ fontSize: "13px", color: "#838383" }}>
            로그인 하시면 보다 편리하게 서비스 이용이 가능합니다.
          </p>
        </S.LoginInfo>
        <S.LoginContainer>
          <S.LoginForm>
            <S.Input
              placeholder="아이디"
              onChange={(e) => setForm({ ...form, userId: e.target.value })}
              value={form.userId}
            />
          </S.LoginForm>
          <S.LoginForm>
            <S.Input
              placeholder="비밀번호"
              type="password"
              onChange={(e) =>
                setForm({ ...form, userPassword: e.target.value })
              }
              value={form.userPassword}
            />
          </S.LoginForm>
        </S.LoginContainer>
        <S.Button onClick={onSubmit}>로그인</S.Button>
        <S.LineContainer>
          <S.Line style={{ width: "200px" }}></S.Line>
          <div style={{ color: "#9A9FAB" }}>SNS 계정으로 로그인</div>
          <S.Line style={{ width: "200px" }}></S.Line>
        </S.LineContainer>
        <S.SocialContainer>
          <Google />
          <Kakao />
        </S.SocialContainer>
      </S.Container>
    </Layout>
  );
}
