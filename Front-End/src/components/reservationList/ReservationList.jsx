import { useNavigate } from "react-router-dom";
import * as S from "./ReservationList.styled";

export function ReservationList({ searchResults }) {
  const navigate = useNavigate();

  console.log({ searchResults });
  return (
    <S.Table>
      <thead>
        <S.TableRow>
          <S.TableHeader>병·의원 명</S.TableHeader>
          <S.TableHeader>전화번호</S.TableHeader>
          <S.TableHeader>주소</S.TableHeader>
          <S.TableHeader style={{ textAlign: "center" }}>
            진료 시간
          </S.TableHeader>
          <S.TableHeader style={{ textAlign: "center", padding: "8px 0" }}>
            예약
          </S.TableHeader>
        </S.TableRow>
      </thead>
      <tbody>
        {searchResults.length === 0 ? (
          <S.TableRow>
            <S.TableCell colSpan="5">
              <S.EmptyMessage>검색된 내용이 없습니다.</S.EmptyMessage>
            </S.TableCell>
          </S.TableRow>
        ) : (
          searchResults.map((item) => (
            <S.TableRow key={item.id}>
              <S.TableCell style={{ width: "15%" }}>
                {item.dutyName}
              </S.TableCell>
              <S.TableCell>{item.dutyTel1}</S.TableCell>
              <S.TableCell style={{ width: "40%" }}>
                {item.dutyAddr}
              </S.TableCell>
              <S.TableCell style={{ textAlign: "center" }}>
                <p style={{ lineHeight: "0.5px" }}>{item.dutyTime1s}</p> ~{" "}
                {item.dutyTime1c}
              </S.TableCell>
              <S.TableCell style={{ textAlign: "center" }}>
                <S.Button
                  onClick={() => {
                    navigate(`/hospital-search/reservation/${item.hpid}`);
                  }}
                >
                  예약하기
                </S.Button>
              </S.TableCell>
            </S.TableRow>
          ))
        )}
      </tbody>
    </S.Table>
  );
}
