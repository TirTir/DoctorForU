import { useEffect, useState } from "react";
import { getUserInfo, postUserUpdate } from "../../../api";
import * as S from "./Modify.styled";
import { useNavigate } from "react-router-dom";

const exampleData = {
  userName: "김유진",
  userId: "admin1234",
  userEmail: "uj0791@naver.com",
};

export function Modify() {
  const [form, setForm] = useState({
    userPassword: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [data, setData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    handleUserInfo();
  }, []);

  const validatePassword = (password) => {
    // 비밀번호 확인
    return form.userPassword === password;
  };

  const handleConfirmedPasswordChange = (e) => {
    const password = e.target.value;
    setForm({ ...form, confirmPassword: password });
    if (!validatePassword(password)) {
      setErrors("비밀번호가 일치하지 않습니다.");
      setConfirmPassword(false);
    } else {
      setErrors("");
      setConfirmPassword(true);
    }
  };

  const handlePhoneNumberChange = (e, part) => {
    // 전화번호 입력
    const value = e.target.value;
    let phoneNumber = form.phoneNumber.split("-");

    if (part === 0 && value.length <= 3) {
      phoneNumber[part] = value;
    } else if ((part === 1 || part === 2) && value.length <= 4) {
      phoneNumber[part] = value;
    }

    setForm({
      ...form,
      phoneNumber: phoneNumber.join("-"),
    });
  };

  const handleUserInfo = async () => {
    const item = sessionStorage.getItem("userId");
    const res = await getUserInfo(item);
    console.log(res);
    if (res) setData(res);
    else setData(exampleData);
  };

  const onSubmit = async () => {
    const item = sessionStorage.getItem("userId");
    const data = {
      userPassword: form.userPassword,
      userPhoneNumber: form.phoneNumber,
    };
    console.log(data);
    const res = await postUserUpdate(item, data);
    console.log(res);
    if (res) navigate("/mypage/dashboard");
    else alert("잘못된 요청입니다.");
  };

  return (
    <S.Container>
      <S.Title>
        <h1 style={{ margin: "2em 0 0 4em" }}>내 정보 수정</h1>
      </S.Title>
      <S.Content>
        {Object.entries(data).map(([key, value]) => (
          <S.InputForm key={key}>
            <S.Label>
              {key === "userName"
                ? "이름"
                : key === "userId"
                ? "아이디"
                : "이메일"}
            </S.Label>
            <S.InputBox style={{ border: "none" }}>
              <S.Input
                type="text"
                style={{ color: "#8E8E8E" }}
                value={value}
                readOnly
              />
            </S.InputBox>
          </S.InputForm>
        ))}
        <S.InputForm>
          <S.Label>비밀번호</S.Label>
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
          <S.Label>비밀번호 확인</S.Label>
          <S.InputBox>
            <S.Input
              type="password"
              onChange={handleConfirmedPasswordChange}
              value={form.confirmPassword}
            />
          </S.InputBox>
          {errors && <S.Error style={{ color: "red" }}>{errors}</S.Error>}
          {!errors && form.confirmPassword && (
            <S.Error style={{ color: "green" }}>비밀번호가 일치합니다.</S.Error>
          )}
        </S.InputForm>
        <S.InputForm style={{ borderBottom: "1px solid #aaaaaa" }}>
          <S.Label>휴대전화번호</S.Label>
          <S.InputBox style={{ width: "10%" }}>
            <S.Input
              style={{ width: "80%" }}
              onChange={(e) => handlePhoneNumberChange(e, 0)}
              value={form.phoneNumber.split("-")[0] || ""}
            />
          </S.InputBox>

          <span style={{ margin: "0 -35px 0 10px" }}>-</span>
          <S.InputBox style={{ width: "10%" }}>
            <S.Input
              style={{ width: "80%" }}
              onChange={(e) => handlePhoneNumberChange(e, 1)}
              value={form.phoneNumber.split("-")[1] || ""}
            />
          </S.InputBox>
          <span style={{ margin: "0 -35px 0 10px" }}>-</span>
          <S.InputBox style={{ width: "10%" }}>
            <S.Input
              style={{ width: "80%" }}
              onChange={(e) => handlePhoneNumberChange(e, 2)}
              value={form.phoneNumber.split("-")[2] || ""}
            />
          </S.InputBox>
        </S.InputForm>
      </S.Content>
      <S.ButtonContainer>
        <S.Button
          onClick={() => {
            if (confirmPassword) onSubmit();
          }}
        >
          저장
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
