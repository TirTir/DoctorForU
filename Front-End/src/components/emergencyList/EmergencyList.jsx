import React from "react";
import { useNavigate } from "react-router-dom";
import { postEmergency, getEmergencyMessage } from "../../api"; // 메시지 요청 버튼 만들기

import * as S from "./EmergencyList.styled";

export function EmergencyList({ results }) {
  const navigate = useNavigate();

  return (
    <>
      <S.ListContainer>
        {results.length > 0 ? ( // exampleDataList -> results라고 해야함
          results.map((result, index) => (
            <S.ListItem key={index}>
              <S.Placeholder />
              <S.Info>
                <p>
                  <strong>병원명:</strong> {result.dutyName}
                </p>
                <p>
                  <strong>주소:</strong> {result.dutyAddr}
                </p>
                <p>
                  <strong>전화번호:</strong> {result.dutyTel1}
                </p>
                <p>
                  <strong>진료 시간:</strong> {result.dutyTime1s} - {result.dutyTime1c}
                </p>
              </S.Info>
              <S.Actions>
                <S.Button
                  onClick={() => {
                    navigate(`/hospital-reservation/${result.hpid}`);
                  }}
                >
                  진료예약
                </S.Button>
              </S.Actions>
            </S.ListItem>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </S.ListContainer>
    </>
  );
}
