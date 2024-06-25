import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./Header.styled";

export function Header({ color }) {
  const [userId, setUserId] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("identify");
    setIsLogin(false);
    navigate("/auth/login");
  };

  useEffect(() => {
    const item = sessionStorage.getItem("userId");
    if (item != null) {
      setIsLogin(true);
      setUserId(item);
    }
  }, [isLogin]);

  return (
    <S.Container color={color}>
      <S.Logo
        onClick={() => {
          navigate("/");
        }}
      >
        Doctor For U
      </S.Logo>
      <S.Nav>
        <ul>
          <li onClick={() => navigate("/hospital-search")}>병원 검색</li>
          <li onClick={() => navigate("/emergency-search")}>
            실시간 응급 상황판
          </li>
          <li onClick={() => navigate("/hospital-search/reservation")}>
            빠른 예약
          </li>
          <li> </li>
        </ul>
      </S.Nav>
      <S.Menu>
        {isLogin ? (
          <div style={{ cursor: "pointer" }}>
            <span>{userId}님</span>
            <span> | </span>

            <span onClick={handleLogout}>로그아웃</span>
          </div>
        ) : (
          <div style={{ cursor: "pointer" }}>
            <span
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              로그인
            </span>
            <span> | </span>
            <span
              onClick={() => {
                navigate("/auth/join");
              }}
            >
              회원가입
            </span>
          </div>
        )}
        <span
          class="material-icons"
          onClick={() => navigate("/mypage/dashboard")}
        >
          account_circle
        </span>
      </S.Menu>
    </S.Container>
  );
}
