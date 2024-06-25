import { useState } from "react";
import { Layout } from "../../../components/common";
import { Google, Kakao } from "../../../components/auth";
import {
  getCheckDuplicateId,
  postVerificationCode,
  postVerificationEmail,
  postJoin,
} from "../../../api";
import * as S from "./Join.styled";
import { useNavigate } from "react-router-dom";

export function Join() {
  const [form, setForm] = useState({
    userName: "",
    userId: "",
    userEmail: "",
    userPassword: "",
    userPhoneNumber: "",
  });

  const [confirm, setConfirm] = useState({
    id: false, //아이디 중복 체크
    password: false, //비밀번호 확인
    email: false, //이메일 확인
  });

  const [verify, setVerify] = useState({
    email: "", //이메일 인증코드
    password: "", //비밀번호 확인
  });

  const [errors, setErrors] = useState({
    userId: "",
    password: "",
  });

  const validateUserId = (userId) => {
    const regex = /^[a-z0-9]{6,12}$/;
    return regex.test(userId);
  };

  const validatePassword = (password) => {
    // 비밀번호 확인
    return form.userPassword === password;
  };

  const handleUserIdChange = (e) => {
    const userId = e.target.value;
    setForm({ ...form, userId });

    if (!validateUserId(userId)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userId: "아이디는 6~12자 영문 소문자와 숫자여야 합니다.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userId: "",
      }));
    }
  };

  const handleConfirmedPasswordChange = (e) => {
    const confirmedPassword = e.target.value;
    setVerify({ ...verify, password: confirmedPassword });
    if (!validatePassword(confirmedPassword)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "비밀번호가 일치하지 않습니다.",
      }));
      setConfirm((prevErrors) => ({
        ...prevErrors,
        password: false,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
      setConfirm((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
    }
  };

  const handlePhoneNumberChange = (e, part) => {
    // 전화번호 입력
    const value = e.target.value;
    let phoneNumber = form.userPhoneNumber.split("-");

    if (part === 0 && value.length <= 3) {
      phoneNumber[part] = value;
    } else if ((part === 1 || part === 2) && value.length <= 4) {
      phoneNumber[part] = value;
    }

    setForm({
      ...form,
      userPhoneNumber: phoneNumber.join("-"),
    });
  };

  const handleEmailChange = (e, part) => {
    // 이메일 입력
    let emailParts = form.userEmail.split("@");
    if (part === 0) {
      emailParts[0] = e.target.value;
    } else {
      emailParts[1] = e.target.value;
    }
    setForm({
      ...form,
      userEmail: emailParts.join("@"),
    });
  };

  const handleCheckDuplicateId = async () => {
    //아이디 중복 체크 요쳥
    const res = await getCheckDuplicateId(form.userId);
    console.log(res);
    if (res) {
      alert("사용 가능한 아이디입니다.");
    } else alert("사용중인 아이디입니다.");
    setConfirm({
      ...confirm,
      id: res,
    });
  };

  const navigate = useNavigate();
  const onSubmit = async () => {
    //회원가입 요청
    const data = {
      userName: form.userName,
      userId: form.userId,
      userEmail: form.userEmail,
      userPassword: form.userPassword,
      userPhoneNumber: form.userPhoneNumber,
    };
    console.log(data);
    const res = await postJoin(data);
    if (res) {
      alert("회원가입이 완료되었습니다.");
      navigate("/auth/login");
    } else alert("잘못된 요청입니다.");
  };

  const handleVerificationEmail = async () => {
    // 이메일 인증 코드 요청
    const data = {
      email: form.userEmail,
    };
    const res = await postVerificationEmail(data);
    if (res) alert("인증 요청되었습니다.");
    else alert("잘못된 이메일 요청입니다.");
  };

  const handleVerificationCode = async () => {
    //이메일 인증 확인
    const data = {
      code: verify.email,
    };
    const res = await postVerificationCode(data);
    console.log(data);
    if (res) alert("인증 완료되었습니다.");
    else alert("잘못된 인증 코드 입니다.");
    setConfirm({
      ...confirm,
      email: res,
    });
  };

  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <S.Container>
        <S.JoinInfo>
          <h1 style={{ fontSize: "40px" }}>회원가입</h1>
          <S.InfoContainer>
            <div>- 아래의 정보들은 이용자 동의없이 공개되지 않습니다.</div>
            <div style={{ color: "#4288DD" }}>
              - 이메일 등 입력된 개인정보가 부정확할 시 서비스 이용에 어려움을
              겪으실 수 있습니다.
            </div>
          </S.InfoContainer>
        </S.JoinInfo>
        <S.JoinContainer>
          <S.JoinForm>
            <S.InputForm>
              <S.Label>
                이름<S.Required>*</S.Required>
              </S.Label>
              <S.InputBox>
                <S.Input
                  type="text"
                  required
                  onChange={(e) =>
                    setForm({ ...form, userName: e.target.value })
                  }
                  value={form.userName}
                />
              </S.InputBox>
            </S.InputForm>
            <S.InputForm>
              <S.Label>
                아이디<S.Required>*</S.Required>
              </S.Label>
              <S.InputBox style={{ width: "20%" }}>
                <S.Input
                  type="text"
                  required
                  placeholder="6~12자 영문 소문자와 숫자"
                  onChange={handleUserIdChange}
                  value={form.userId}
                  disabled={confirm.id}
                />
              </S.InputBox>
              <S.CheckButton
                onClick={handleCheckDuplicateId}
                disabled={confirm.id}
                style={{ opacity: errors.userId ? 0.5 : 1 }}
              >
                중복체크
              </S.CheckButton>
              {errors.userId && (
                <S.Error style={{ color: "red" }}>{errors.userId}</S.Error>
              )}
            </S.InputForm>
            <S.InputForm>
              <S.Label>
                비밀번호<S.Required>*</S.Required>
              </S.Label>
              <S.InputBox>
                <S.Input
                  type="password"
                  onChange={(e) =>
                    setForm({ ...form, userPassword: e.target.value })
                  }
                  value={form.userPassword}
                />
              </S.InputBox>
            </S.InputForm>
            <S.InputForm>
              <S.Label>
                비밀번호 확인<S.Required>*</S.Required>
              </S.Label>
              <S.InputBox>
                <S.Input
                  type="password"
                  onChange={handleConfirmedPasswordChange}
                  value={verify.password}
                />
              </S.InputBox>
              {errors.password && (
                <S.Error style={{ color: "red" }}>{errors.password}</S.Error>
              )}
              {!errors.password && verify.password && (
                <S.Error style={{ color: "green" }}>
                  비밀번호가 일치합니다.
                </S.Error>
              )}
            </S.InputForm>
            <S.InputForm>
              <S.Label>
                이메일<S.Required>*</S.Required>
              </S.Label>
              <S.InputBox style={{ width: "20%" }}>
                <S.Input
                  onChange={(e) => handleEmailChange(e, 0)}
                  value={form.userEmail.split("@")[0] || ""}
                />
              </S.InputBox>

              <span style={{ margin: "0 -35px 0 10px" }}>@</span>
              <S.InputBox style={{ width: "20%" }}>
                <S.Input
                  onChange={(e) => handleEmailChange(e, 1)}
                  value={form.userEmail.split("@")[1] || ""}
                  disabled={confirm.email}
                />
              </S.InputBox>
              <S.CheckButton
                onClick={handleVerificationEmail}
                disabled={confirm.email}
                style={{ opacity: confirm.email ? 0.5 : 1 }}
              >
                인증요청
              </S.CheckButton>
            </S.InputForm>
            <S.InputForm>
              <S.Label>
                이메일 확인<S.Required>*</S.Required>
              </S.Label>
              <S.InputBox style={{ width: "20%" }}>
                <S.Input
                  onChange={(e) =>
                    setVerify({ ...verify, email: e.target.value })
                  }
                  value={verify.email}
                  disabled={confirm.email}
                />
              </S.InputBox>
              <S.CheckButton
                onClick={handleVerificationCode}
                disabled={confirm.email}
                style={{ opacity: confirm.email ? 0.5 : 1 }}
              >
                인증확인
              </S.CheckButton>
            </S.InputForm>
            <S.InputForm style={{ borderBottom: "1px solid #aaaaaa" }}>
              <S.Label>휴대전화번호</S.Label>
              <S.InputBox style={{ width: "10%" }}>
                <S.Input
                  style={{ width: "80%" }}
                  onChange={(e) => handlePhoneNumberChange(e, 0)}
                  value={form.userPhoneNumber.split("-")[0] || ""}
                />
              </S.InputBox>

              <span style={{ margin: "0 -35px 0 10px" }}>-</span>
              <S.InputBox style={{ width: "10%" }}>
                <S.Input
                  style={{ width: "80%" }}
                  onChange={(e) => handlePhoneNumberChange(e, 1)}
                  value={form.userPhoneNumber.split("-")[1] || ""}
                />
              </S.InputBox>
              <span style={{ margin: "0 -35px 0 10px" }}>-</span>
              <S.InputBox style={{ width: "10%" }}>
                <S.Input
                  style={{ width: "80%" }}
                  onChange={(e) => handlePhoneNumberChange(e, 2)}
                  value={form.userPhoneNumber.split("-")[2] || ""}
                />
              </S.InputBox>
            </S.InputForm>
          </S.JoinForm>
        </S.JoinContainer>
        <S.Button
          onClick={() => {
            if (confirm.id && confirm.password && confirm.email) {
              onSubmit();
            }
          }}
          disabled={!(confirm.id && confirm.password && confirm.email)}
          style={{ opacity: errors.userId ? 0.5 : 1 }}
        >
          가입하기
        </S.Button>
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
