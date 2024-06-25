import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { getEmergencyMessage } from "../../api"; // 메시지 요청 버튼 만들기

import * as S from "./EmergencyLabel.styled";

export function Modal({ isOpen, closeModal, hpid }) {
  const [data, setData] = useState(null); // null -> []였음

  // useEffect(() => {
  //   handleModalMessage(); //처음 실행 -> 초기화 개념
  // }, []);

  useEffect(() => {
    if (hpid) {
      handleModalMessage();
    }
  }, [hpid]);

  const handleModalMessage = async () => {
    try {
      const res = await getEmergencyMessage(hpid);
      if (res) {
        setData(res);
      }
    } catch (error) {
      console.error("Error fetching emergency message:", error);
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "80em",
      maxHeight: "50vh",
      //height: "400px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  const contentStyles = {
    overflowY: "auto", // 세로 스크롤 가능하게 설정
    padding: "1em",
    flexGrow: 1,
  };

  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse",
  };
  const thStyles = {
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const wideThStyles = {
    ...thStyles,
    width: "9%", // 너비 조정
  };

  const tdStyles = {
    border: "1px solid #ddd",
    padding: "8px",
  };

  const formatDate = (dateString) => {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    const hour = dateString.substring(8, 10);
    const minute = dateString.substring(10, 12);
    const second = dateString.substring(12, 14);

    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto" }}>
        <div
          style={{
            padding: "1em",
            borderBottom: "1px solid #ccc",
            textAlign: "center",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          응급실/진료불가능 메시지 [병원 이름]
        </div>
        {hpid && data && data.length > 0 ? (
          <table style={tableStyles}>
            <thead>
              <tr>
                <th style={wideThStyles}>메시지 구분</th>
                <th style={wideThStyles}>구분 </th>
                <th style={thStyles}>메시지 내용</th>
                <th style={thStyles}>등록일시</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={tdStyles}>{item.symBlkMsgTyp}</td>
                  <td style={tdStyles}>응급실</td>
                  <td style={tdStyles}>{item.symBlkMsg}</td>
                  <td style={tdStyles}>{formatDate(item.symBlkSttDtm)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>데이터를 불러오는 중...</p>
        )}
        <div style={{ padding: "1em", borderTop: "1px solid #ccc", textAlign: "center" }}>
          <S.ModalButton
            onClick={() => {
              closeModal();
            }}
            style={{ fontSize: "12px", padding: "6px 12px" }} // 작게 조정
          >
            닫기
          </S.ModalButton>
        </div>
      </div>
    </ReactModal>
  );
}
