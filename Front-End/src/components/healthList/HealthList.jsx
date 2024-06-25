import { useState } from "react";

import { healthListData } from "./Data"; // 운동 리스트 데이터
import * as S from "./HealthList.styled";

export function HealthList({
  exerciseList,
  setExerciseList,
  onExerciseChange,
}) {
  const [exerciseName, setExerciseName] = useState("");
  const [filteredData, setFilteredData] = useState(healthListData);

  const handleSearchExerciseData = () => {
    console.log(exerciseName);
    if (exerciseName.trim() === "") {
      setFilteredData(healthListData);
      return;
    }

    const filtered = healthListData.filter((exercise) =>
      exercise.name.includes(exerciseName)
    );
    setFilteredData(filtered);
  };

  return (
    <S.Container>
      <h1 style={{ marginLeft: " 10px" }}> Daily Health</h1>
      <S.SearchContainer>
        <S.InputBox>
          <S.Img
            src="/img/Icon09.png"
            alt="Icon09"
            style={{ width: "35px", height: "35px" }}
          />
          <S.Line></S.Line>
          <S.Input
            placeholder="찾으시는 운동을 검색해주세요."
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </S.InputBox>
        <S.Button onClick={handleSearchExerciseData}>
          <S.Img
            src="/img/Icon08.png"
            alt="Icon08"
            style={{ width: "35px", height: "35px", marginLeft: "15px" }}
          />
        </S.Button>
      </S.SearchContainer>
      <S.ExerciseList>
        {filteredData.map((exercise, index) => (
          <S.ExerciseListItem key={index}>
            <S.CheckBox
              key={exercise.id}
              type="checkbox"
              checked={exerciseList.some(
                (item) => item.exerciseName === exercise.name
              )}
              onChange={(e) =>
                onExerciseChange(exercise.name, e.target.checked)
              }
            />
            <S.Img src={exercise.icon} alt={exercise.name} />
            <S.ExerciseName>{exercise.name}</S.ExerciseName>
          </S.ExerciseListItem>
        ))}
      </S.ExerciseList>
    </S.Container>
  );
}
