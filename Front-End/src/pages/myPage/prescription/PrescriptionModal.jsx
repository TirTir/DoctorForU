import ReactModal from "react-modal";
import * as S from "./Prescription.styled";

export function PresriptionModal({ isOpen, closeModal, medication }) {
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
      overflowY: "scroll",
    },
  };

  if (!medication) {
    return null; // medication이 undefined일 경우 null 반환
  }

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <S.ModalTitle>
        <h2 style={{ fontWeight: "bold" }}>처방 내역</h2>
        <S.ModalButton
          onClick={() => {
            closeModal();
          }}
        >
          <span style={{ fontSize: "30px", fontWeight: "lighter" }}>x</span>
        </S.ModalButton>
      </S.ModalTitle>
      <S.Line></S.Line>
      <div>
        <S.Table>
          <thead>
            <S.TableRow>
              <S.TableHeader>약품명</S.TableHeader>
              <S.TableHeader>약품코드</S.TableHeader>
              <S.TableHeader>처방약품효능</S.TableHeader>
            </S.TableRow>
          </thead>
          <tbody>
            {medication.drugs &&
              medication.drugs.map((item) => (
                <S.TableRow key={item.id}>
                  <S.TableCell>{item.name}</S.TableCell>
                  <S.TableCell>{item.code}</S.TableCell>
                  <S.TableCell>{item.effect}</S.TableCell>
                </S.TableRow>
              ))}
          </tbody>
        </S.Table>
      </div>
    </ReactModal>
  );
}
