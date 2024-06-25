import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components/common";
import { Dashboard, Modify, Inquiries, Prescription, DailyHealth } from "./";
import * as S from "./MyPage.styled";

export function MyPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(params.page || "dashboard"); // 기본값 설정
  }, [params]);

  useEffect(() => {
    const item = sessionStorage.getItem("userId");
    if (item === null) {
      alert("로그인 후 이용가능한 서비스입니다.");
      navigate("/auth/login");
    }
  }, []);

  const handleSidebarClick = (itemName) => {
    setActiveItem(itemName);
    navigate(`/mypage/${itemName}`); // Update URL based on item name
  };

  const renderContent = () =>
    activeItem === "dashboard" ? (
      <Dashboard />
    ) : activeItem === "prescription" ? (
      <Prescription />
    ) : activeItem === "dailyhealth" ? (
      <DailyHealth />
    ) : activeItem === "modify" ? (
      <Modify />
    ) : activeItem === "inquiries" ? (
      <Inquiries />
    ) : (
      <Dashboard />
    );

  return (
    <Layout>
      <S.Container>
        <S.Sidebar>
          <S.SidebarItem
            isActive={activeItem === "dashboard"}
            onClick={() => handleSidebarClick("dashboard")}
          >
            <S.Img
              style={{
                height: "15px",
                width: "15px",
                margin: "0 14px 0 2px",
              }}
              src="/img/Icon11.png"
              alt="Icon11"
            />
            <span>Dashboard</span>
          </S.SidebarItem>
          <S.SidebarItem
            isActive={activeItem === "prescription"}
            onClick={() => handleSidebarClick("prescription")}
          >
            <S.Img src="/img/Icon12.png" alt="Icon12" />
            <span>진단 내역</span>
          </S.SidebarItem>
          <S.SidebarItem
            isActive={activeItem === "dailyhealth"}
            onClick={() => handleSidebarClick("dailyhealth")}
          >
            <S.Img src="/img/Icon13.png" alt="Icon13" />
            <span>Daily Health</span>
          </S.SidebarItem>
          <S.SidebarItem
            isActive={activeItem === "modify"}
            onClick={() => handleSidebarClick("modify")}
          >
            <S.Img src="/img/Icon14.png" alt="Icon14" />내 정보 수정
          </S.SidebarItem>
          <S.SidebarItem
            isActive={activeItem === "inquiries"}
            onClick={() => handleSidebarClick("inquiries")}
          >
            <S.Img
              style={{ margin: "0 8px 0 2px" }}
              src="/img/Icon15.png"
              alt="Icon15"
            />
            <span>문의 내역</span>
          </S.SidebarItem>
        </S.Sidebar>
        {renderContent()}
      </S.Container>
    </Layout>
  );
}
