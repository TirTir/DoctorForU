import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal"; // 모달 컴포넌트 추가

import * as S from "./EmergencyLabel.styled";

export function EmergencyLabel({ results }) {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const navigate = useNavigate();

  // 여기부터 팝업 설정
  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  //////////////////////////////////////////////////////////////////////////
  const shouldHighlight = (value) => {
    return value === "Y"; // 값이 "Y"일 경우 하이라이트 적용
  };

  const shouldLowlight = (value) => {
    return value !== "Y"; // 값이 "Y"가 아닐 경우 로우라이트 적용
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
    <>
      <Modal isOpen={isOpen} closeModal={closeModal} hpid={item} />
      <S.ListContainer>
        {results.length > 0 ? (
          results.map((result, index) => (
            <S.ListItem key={index}>
              <S.Info>
                <h2>{result.dutyName}</h2>
                <S.HospitalName>응급실 번호: {result.dutyTel3}</S.HospitalName>

                <span>최종 갱신일시: {formatDate(result.hvidate)}</span>
              </S.Info>
              <S.Section>
                <S.Title style={{ display: "flex", alignItems: "center" }}>
                  입원병상
                  <S.Button
                    onClick={() => {
                      setItem(result.hpid);
                      openModal();
                    }}
                    style={{ marginLeft: "30px", margin: "5px" }} // 여백을 추가
                  >
                    응급실 메시지
                  </S.Button>
                </S.Title>
                <S.Grid>
                  <S.GridHeader>[중환자실] 일반</S.GridHeader>
                  <S.GridHeader>[중환자실] 내과</S.GridHeader>
                  <S.GridHeader>[중환자실] 외과</S.GridHeader>
                  <S.GridHeader>[중환자실] 신경과</S.GridHeader>
                  <S.GridHeader>[중환자실] 흉부외과</S.GridHeader>
                  <S.GridHeader>[중환자실] 신경외과</S.GridHeader>
                  <S.GridHeader>[중환자실] 외상</S.GridHeader>
                  <S.GridItem>{result.hvicc}</S.GridItem>
                  <S.GridItem>{result.hv2}</S.GridItem>
                  <S.GridItem>{result.hv3}</S.GridItem>
                  <S.GridItem>{result.hvcc}</S.GridItem>
                  <S.GridItem>{result.hvccc}</S.GridItem>
                  <S.GridItem>{result.hv6}</S.GridItem>
                  <S.GridItem>{result.hv9}</S.GridItem>
                </S.Grid>
                <S.Grid>
                  <S.GridHeader>[중환자실] 신생아</S.GridHeader>
                  <S.GridHeader>[중환자실] 화상</S.GridHeader>
                  <S.GridHeader>[중환자실] 소아</S.GridHeader>
                  <S.GridHeader>[중환자실] 심장내과</S.GridHeader>
                  <S.GridHeader>[중환자실] 음압격리</S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridItem>{result.hvncc}</S.GridItem>
                  <S.GridItem>{result.hv8}</S.GridItem>
                  <S.GridItem>{result.hv32}</S.GridItem>
                  <S.GridItem>{result.hv34}</S.GridItem>
                  <S.GridItem>{result.hv35}</S.GridItem>
                  <S.GridItem>{result.traumaRoom}</S.GridItem>
                  <S.GridItem>{result.pediatricER}</S.GridItem>
                </S.Grid>
                <S.Grid>
                  <S.GridHeader>[응급전용] 중환자실 음압격리</S.GridHeader>
                  <S.GridHeader>[응급전용] 중환자실 일반격리</S.GridHeader>
                  <S.GridHeader>[응급전용] 입원실 음압격리</S.GridHeader>
                  <S.GridHeader>[응급전용] 입원실 일반격리 </S.GridHeader>
                  <S.GridHeader>[응급전용] 중환자실</S.GridHeader>
                  <S.GridHeader>[응급전용] 입원실</S.GridHeader>
                  <S.GridHeader>[응급전용] 소아입원실</S.GridHeader>
                  <S.GridItem>{result.hv17}</S.GridItem>
                  <S.GridItem>{result.hv18}</S.GridItem>
                  <S.GridItem>{result.hv19}</S.GridItem>
                  <S.GridItem>{result.hv21}</S.GridItem>
                  <S.GridItem>{result.hv31}</S.GridItem>
                  <S.GridItem>{result.hv36}</S.GridItem>
                  <S.GridItem>{result.hv37}</S.GridItem>
                </S.Grid>
                <S.Grid>
                  <S.GridHeader>[입원실] 일반</S.GridHeader>
                  <S.GridHeader>[입원실] 음압격리</S.GridHeader>
                  <S.GridHeader>[입원실] 정신과 폐쇄병동</S.GridHeader>
                  <S.GridHeader>[기타] 수술실 </S.GridHeader>
                  <S.GridHeader>[기타] 분만실</S.GridHeader>
                  <S.GridHeader>[기타] 화상전용처치실</S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridItem>{result.hvgc}</S.GridItem>
                  <S.GridItem>{result.hv41}</S.GridItem>
                  <S.GridItem>{result.hv40}</S.GridItem>
                  <S.GridItem>{result.hvoc}</S.GridItem>
                  <S.GridItem highlight={shouldHighlight(result.hv42)} lowlight={shouldLowlight(result.hv42)}>
                    {result.hv42}
                  </S.GridItem>
                  <S.GridItem highlight={shouldHighlight(result.hv43)} lowlight={shouldLowlight(result.hv43)}>
                    {result.hv43}
                  </S.GridItem>
                  <S.GridItem></S.GridItem>
                </S.Grid>
              </S.Section>
              <S.Section>
                <S.Title>감염병 병상</S.Title>
                <S.Grid>
                  <S.GridHeader>감염병 전담병상 중환자실</S.GridHeader>
                  <S.GridHeader>감염병 전담병상 음압격리병상</S.GridHeader>
                  <S.GridHeader>[감염] 중증 병상</S.GridHeader>
                  <S.GridHeader>[감염] 준-중증 병상</S.GridHeader>
                  <S.GridHeader>[감염] 중등증 병상</S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridItem>{result.hv22}</S.GridItem>
                  <S.GridItem>{result.hv23}</S.GridItem>
                  <S.GridItem>{result.hv24}</S.GridItem>
                  <S.GridItem>{result.hv25}</S.GridItem>
                  <S.GridItem>{result.hv26}</S.GridItem>
                  <S.GridItem></S.GridItem>
                  <S.GridItem></S.GridItem>
                  <S.GridItem></S.GridItem>
                </S.Grid>
              </S.Section>
              <S.Section>
                <S.Title>실시간 가용 가능 장비</S.Title>
                <S.Grid>
                  <S.GridHeader>CT</S.GridHeader>
                  <S.GridHeader>MRI</S.GridHeader>
                  <S.GridHeader>혈관촬영기</S.GridHeader>
                  <S.GridHeader>인공호흡기</S.GridHeader>
                  <S.GridHeader>인큐베이터</S.GridHeader>
                  <S.GridHeader>CRRT</S.GridHeader>
                  <S.GridHeader>ECMO</S.GridHeader>

                  <S.GridItem highlight={shouldHighlight(result.hvctayn)} lowlight={shouldLowlight(result.hvctayn)}>
                    {result.hvctayn}
                  </S.GridItem>
                  <S.GridItem highlight={shouldHighlight(result.hvmriayn)} lowlight={shouldLowlight(result.hvmriayn)}>
                    {result.hvmriayn}
                  </S.GridItem>
                  <S.GridItem
                    highlight={shouldHighlight(result.hvangioayn)}
                    lowlight={shouldLowlight(result.hvangioayn)}
                  >
                    {result.hvangioayn}
                  </S.GridItem>
                  <S.GridItem
                    highlight={shouldHighlight(result.hvventiayn)}
                    lowlight={shouldLowlight(result.hvventiayn)}
                  >
                    {result.hvventiayn}
                  </S.GridItem>
                  <S.GridItem highlight={shouldHighlight(result.hvincuayn)} lowlight={shouldLowlight(result.hvincuayn)}>
                    {result.hvincuayn}
                  </S.GridItem>
                  <S.GridItem highlight={shouldHighlight(result.hvcrrtayn)} lowlight={shouldLowlight(result.hvcrrtayn)}>
                    {result.hvcrrtayn}
                  </S.GridItem>
                  <S.GridItem highlight={shouldHighlight(result.hvecmoayn)} lowlight={shouldLowlight(result.hvecmoayn)}>
                    {result.hvecmoayn}
                  </S.GridItem>
                </S.Grid>
                <S.Grid>
                  <S.GridHeader>고압산소치료기</S.GridHeader>
                  <S.GridHeader>중심체온조절유도기</S.GridHeader>
                  <S.GridHeader>구급차가용여부</S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridHeader></S.GridHeader>
                  <S.GridItem highlight={shouldHighlight(result.hvoxyayn)} lowlight={shouldLowlight(result.hvoxyayn)}>
                    {result.hvoxyayn}
                  </S.GridItem>
                  <S.GridItem highlight={shouldHighlight(result.hvhypoayn)} lowlight={shouldLowlight(result.hvhypoayn)}>
                    {result.hvhypoayn}
                  </S.GridItem>
                  <S.GridItem highlight={shouldHighlight(result.hvamyn)} lowlight={shouldLowlight(result.hvamyn)}>
                    {result.hvamyn}
                  </S.GridItem>
                  <S.GridItem></S.GridItem>
                  <S.GridItem></S.GridItem>
                  <S.GridItem></S.GridItem>
                  <S.GridItem></S.GridItem>
                </S.Grid>
              </S.Section>
            </S.ListItem>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </S.ListContainer>
    </>
  );
}
