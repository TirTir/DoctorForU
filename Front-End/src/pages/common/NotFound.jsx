import "./NotFound.styled.css";

export function NotFound() {
  return (
    <div className="Container">
      <h1 style={{ fontStyle: "italic", fontWeight: "bold" }}>DoctorForU</h1>
      <div style={{ fontSize: "20px", fontWeight: "bold", margi: "10px" }}>
        페이지가 존재하지 않습니다
      </div>
      <p>링크를 잘못 입력하셨거나 페이지가 삭제/이동되었을 수 있습니다</p>
    </div>
  );
}
