import { useState } from "react";
import Modal from "react-modal";
import { postInquiriesData } from "../../api";
import * as S from "./Inquiry.styled";

export function Inquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setForm({
      title: "",
      content: "",
    });
    setIsOpen(false);
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
      height: "480px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  const onSubmit = async () => {
    const contentsReplaceNewline = () => {
      return form.content.replaceAll("<br>", "\r\n");
    }; // 스페이스, 줄바꿈 저장

    const data = {
      userId: sessionStorage.getItem("userId"),
      title: form.title,
      content: contentsReplaceNewline(),
    };
    console.log(data);

    const res = await postInquiriesData(data);
    if (res) {
      alert("등록이 완료되었습니다.");
      closeModal();
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} style={customStyles}>
        <h2 style={{ fontWeight: "bold" }}>문의하기</h2>
        <S.Line></S.Line>
        <S.Content>
          <S.Title>문의제목</S.Title>
          <S.Input
            style={{ height: "20px" }}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          ></S.Input>
        </S.Content>
        <S.Content>
          <S.Title>문의내용</S.Title>
          <S.Input
            style={{ height: "150px" }}
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          ></S.Input>
        </S.Content>
        <S.ModalButton>
          <S.Button
            primary
            onClick={() => {
              if (!form.title) alert("문의 제목을 입력해주세요");
              else if (!form.content) alert("문의 내용을 입력해주세요");
              else onSubmit();
            }}
          >
            문의하기
          </S.Button>
          <S.Button
            onClick={() => {
              closeModal();
            }}
          >
            취소
          </S.Button>
        </S.ModalButton>
      </Modal>
      <S.Container onClick={openModal}>
        <p style={{ fontWeight: "bold" }}>문의하기</p>
        <S.Line></S.Line>
        <S.Content>
          <S.Title>문의제목</S.Title>
          <S.Box style={{ height: "30px" }}></S.Box>
        </S.Content>
        <S.Content>
          <S.Title>문의내용</S.Title>
          <S.Box style={{ height: "100px" }}></S.Box>
        </S.Content>
      </S.Container>
    </>
  );
}
