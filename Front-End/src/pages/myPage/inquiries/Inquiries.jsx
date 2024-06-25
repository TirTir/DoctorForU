import { useState, useEffect } from "react";
import { postToGetInquiries } from "../../../api";
import { Modal } from "./";
import * as S from "./Inquiries.styled";

export function Inquiries() {
  const [isOpen, setIsOpen] = useState(false);
  const [tempData, setTempData] = useState({}); // 보여질 데이터
  const [data, setData] = useState([]);

  useEffect(() => {
    handleInquiriesData();
  }, []);

  const handleInquiriesData = async () => {
    const data = {
      userId: sessionStorage.getItem("userId"),
    };
    const res = await postToGetInquiries(data);
    if (res) {
      setData(res);
    }
  };

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal} data={tempData} />
      <S.Container>
        <S.Title>
          <h1 style={{ margin: "2em 0 0 4em" }}>문의 내역</h1>
        </S.Title>
        <S.Table>
          <thead>
            <S.TableRow>
              <S.TableHeader style={{ width: "10%" }}>번호</S.TableHeader>
              <S.TableHeader style={{ width: "60%" }}>문의 제목</S.TableHeader>
              <S.TableHeader>문의 날짜</S.TableHeader>
              <S.TableHeader>상태</S.TableHeader>
            </S.TableRow>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <S.TableRow>
                <S.TableCell colSpan="5">
                  <S.EmptyMessage>문의 내역이 없습니다.</S.EmptyMessage>
                </S.TableCell>
              </S.TableRow>
            ) : (
              data.map((inquiry, index) => (
                <S.TableRow
                  key={index}
                  onClick={() => {
                    setTempData(inquiry);
                    openModal();
                  }}
                >
                  <S.TableCell>{index + 1}</S.TableCell>
                  <S.TableCell
                    style={{ textAlign: "left", paddingLeft: "4em" }}
                  >
                    {inquiry.title}
                  </S.TableCell>
                  <S.TableCell>{inquiry.createAt}</S.TableCell>
                  <S.TableCell>
                    {inquiry.status ? "답변 완료" : "접수 완료"}
                  </S.TableCell>
                </S.TableRow>
              ))
            )}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
}
