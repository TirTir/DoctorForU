import ReactModal from "react-modal";
import * as S from "./Inquiries.styled";

export function Modal({ isOpen, closeModal, data }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "50em",
      height: "400px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <h2 style={{ fontWeight: "bold" }}>{data.title}</h2>
      <S.Line></S.Line>
      <S.Content>
        <span
          style={{ width: "100%", height: "10em", alignItems: "self-start" }}
        >
          {data.content}
        </span>
        <S.Button
          onClick={() => {
            closeModal();
          }}
        >
          닫기
        </S.Button>
      </S.Content>
    </ReactModal>
  );
}
