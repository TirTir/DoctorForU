import { useState, useEffect } from "react";
import { postToGetExercise } from "../../api";
import ReactModal from "react-modal";

import * as S from "./Health.styled";

export function HealthModal({ isOpen, closeModal, date }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetExercise();
  }, [date]);

  const handleGetExercise = async () => {
    console.log("현재 날짜: " + date);
    const data = {
      userId: sessionStorage.getItem("userId"),
      selectedDate: date,
    };
    const res = await postToGetExercise(data);
    console.log(" 운동기록 목록: " + res);
    if (res) {
      setData(res); // 여기에 spread operator를 사용하지 않습니다.
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "40em",
      height: "400px",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <S.ModalTitle>
        <h2 style={{ fontWeight: "bold" }}>{date}</h2>
        <S.ModalButton
          onClick={() => {
            closeModal();
          }}
        >
          X
        </S.ModalButton>
      </S.ModalTitle>
      <S.Line style={{ height: "auto", width: "100%" }}></S.Line>
      <S.Content>
        <S.Table>
          {data.map((exercise, index) => (
            <S.TableRow key={index}>
              <S.TableCell style={{ width: "40%" }}>
                <span>{exercise.exerciseName}</span>
              </S.TableCell>
              <S.TableCell>
                <span>{exercise.exerciseWeight}kg</span>
              </S.TableCell>
              <S.TableCell style={{ textAlign: "left" }}>
                <span>{exercise.exerciseCount}회</span>
              </S.TableCell>
            </S.TableRow>
          ))}
        </S.Table>
      </S.Content>
    </ReactModal>
  );
}
