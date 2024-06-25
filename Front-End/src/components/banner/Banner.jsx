import { useState } from "react";
import { BannerModal } from "./BannerModal";

import * as S from "./Banner.styled";

export function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const userId = sessionStorage.getItem("userId");

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
      <BannerModal isOpen={isOpen} closeModal={closeModal} />
      <S.Container>
        <S.Title>
          <S.Content>{userId}님 환영합니다!👋</S.Content>
          <S.Content style={{ fontSize: "30px" }}>
            정기적으로 건강을 체크하세요
            {/* Check Your Health Reqularly */}
          </S.Content>
          <S.BannerButton onClick={openModal}>오늘의 건강기록</S.BannerButton>
        </S.Title>
        <S.Img src="/img/Icon23.png" alt="Icon23" />
      </S.Container>
    </>
  );
}
