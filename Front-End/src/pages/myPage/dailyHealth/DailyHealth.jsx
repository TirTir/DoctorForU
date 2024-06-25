import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HealthList } from "../../../components";
import { postRegisterExercise } from "../../../api";

import * as S from "./DailyHealth.styled";

export function DailyHealth() {
  // const [data, setData] = useState({});
  const [exerciseList, setExerciseList] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   handleUpdateExercise();
  // }, []);

  // const handleUpdateExercise = async () => {
  //   const now = new Date();
  //   const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  //   const todayKST = koreaTime.toISOString().split("T")[0];
  //   const data = {
  //     userId: sessionStorage.getItem("userId"),
  //     selectedDate: todayKST,
  //   };
  //   const res = await postToGetExercise(data);
  //   if (res) {
  //     //setExerciseList([...exerciseList, res]);
  //     setData(res); // 여기에 spread operator를 사용하지 않습니다.
  //   }
  // };

  const handleExerciseList = (exerciseName, isChecked) => {
    // 체크박스 선택시
    if (isChecked) {
      setExerciseList([
        ...exerciseList,
        {
          exerciseName: exerciseName,
          exerciseSets: 0,
          exerciseWeight: 0,
          exerciseCount: 0,
          exerciseDuration: "00:00",
          isCompleted: false,
        },
      ]);
    } else {
      setExerciseList(
        exerciseList.filter((item) => item.exerciseName !== exerciseName)
      );
    }
  };

  const handleTimeChange = (index, part, value) => {
    // 시:분 입력
    const updatedList = [...exerciseList];
    let timeParts = updatedList[index].exerciseDuration
      ? updatedList[index].exerciseDuration.split(":")
      : ["00", "00"];
    if (part === 0) {
      timeParts[0] = value.padStart(2, "0"); // 두 자리로 패딩
    } else {
      timeParts[1] = value.padStart(1, "0"); // 두 자리로 패딩
    }
    updatedList[index].exerciseDuration = timeParts.join(":");
    setExerciseList(updatedList);
  };

  const handleInputChange = (index, field, value) => {
    // 값 입력시
    const updatedList = [...exerciseList];
    updatedList[index][field] = value;
    setExerciseList(updatedList);
  };

  const onSave = async () => {
    const userId = sessionStorage.getItem("userId");
    const data = exerciseList.map((exercise) => ({
      userId: userId,
      exerciseName: exercise.exerciseName,
      exerciseSets: parseInt(exercise.exerciseSets, 10),
      exerciseWeight: parseInt(exercise.exerciseWeight, 10),
      exerciseCount: parseInt(exercise.exerciseCount, 10),
      isCompleted: exercise.isCompleted,
      exerciseDuration: exercise.exerciseDuration
        ? exercise.exerciseDuration
            .split(":")
            .map((part) => part.padStart(2, "0"))
            .join(":")
        : "00:00",
    }));

    console.log(data);
    const res = await postRegisterExercise(data);
    if (res) {
      alert("저장되었습니다.");
      navigate("/mypage/dashboard");
    } else alert("저장에 실패하였습니다.");
  };

  return (
    <S.Container>
      <HealthList
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
        onExerciseChange={handleExerciseList}
      />
      <S.Content>
        {exerciseList.map((exercise, index) => (
          <S.Card key={index}>
            <S.Table>
              <thead>
                <S.TableRow>
                  <S.TableHeader
                    style={{
                      width: "55%",
                      textAlign: "left",
                    }}
                  >
                    운동
                  </S.TableHeader>
                  <S.TableHeader>세트</S.TableHeader>
                  <S.TableHeader>kg</S.TableHeader>
                  <S.TableHeader>회</S.TableHeader>
                  <S.TableHeader>시 / 분</S.TableHeader>
                  <S.TableHeader>완료</S.TableHeader>
                </S.TableRow>
              </thead>
              <tbody>
                <S.TableRow>
                  <S.TableCell style={{ textAlign: "left" }}>
                    {exercise.exerciseName}
                  </S.TableCell>
                  <S.TableCell>
                    <S.Input
                      type="number"
                      value={exercise.exerciseSets}
                      onChange={(e) =>
                        handleInputChange(index, "exerciseSets", e.target.value)
                      }
                    />
                  </S.TableCell>
                  <S.TableCell>
                    <S.Input
                      type="number"
                      value={exercise.exerciseWeight}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "exerciseWeight",
                          e.target.value
                        )
                      }
                    />
                  </S.TableCell>
                  <S.TableCell>
                    <S.Input
                      type="number"
                      value={exercise.exerciseCount}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "exerciseCount",
                          e.target.value
                        )
                      }
                    />
                  </S.TableCell>
                  <S.TableCell style={{ flexDirection: "row", width: "30%" }}>
                    <S.Input
                      style={{ width: "30px" }}
                      type="number"
                      //value={exercise.exerciseDuration.split(":")[0] || "00"}
                      value={
                        exercise.exerciseDuration
                          ? exercise.exerciseDuration.split(":")[0]
                          : "00"
                      }
                      onChange={(e) =>
                        handleTimeChange(index, 0, e.target.value)
                      }
                    />
                    <span style={{ margin: "0 10px" }}>:</span>
                    <S.Input
                      style={{ width: "30px" }}
                      type="number"
                      //value={exercise.exerciseDuration.split(":")[1] || "00"}
                      value={
                        exercise.exerciseDuration
                          ? exercise.exerciseDuration.split(":")[1]
                          : "00"
                      }
                      onChange={(e) =>
                        handleTimeChange(index, 1, e.target.value)
                      }
                    />
                  </S.TableCell>
                  <S.TableCell>
                    <S.CheckBox
                      type="checkbox"
                      checked={exercise.isCompleted}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "isCompleted",
                          e.target.checked
                        )
                      }
                    />
                  </S.TableCell>
                </S.TableRow>
              </tbody>
            </S.Table>
          </S.Card>
        ))}
        <S.Line></S.Line>
        <S.Button onClick={onSave}>저장하기</S.Button>
      </S.Content>
    </S.Container>
  );
}
