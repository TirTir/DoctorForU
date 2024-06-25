import styled from "styled-components";

export const rightData = styled.div`
  margin-left: 10px;
  font-size: 16px;
  color: #333;
`;

export const HospitalName = styled.h2`
  flex: 10;
  position: relative;
  left: 30px;
  font-size: 18px;
  color: #333;
`;

export const ListContainer = styled.div`
  margin-top: 20px;
`;

export const ListItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  background-color: #d4eaff;
`;

// export const Button = styled.button`
//   padding: 8px 12px;
//   font-size: 14px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
export const Button = styled.button`
  padding: 6px 10px; /* 크기 조정 */
  font-size: 12px; /* 폰트 크기 조정 */
  background-color: #ff0000; /* 배경색을 빨간색으로 변경 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000; /* 호버 색상을 조금 어두운 빨간색으로 변경 */
  }
`;

export const Section = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  border-bottom: 1px solid #ddd;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

export const GridHeader = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export const GridItem = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.highlight ? "#d4edda" : props.lowlight ? "#f8d7da" : "#fff"}; /* 초록색 또는 빨간색 배경 */
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export const StatusIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.status === "good" ? "green" : props.status === "average" ? "yellow" : "red")};
  margin-right: 5px;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  width: 70px;
  height: 50px;
  font-size: 20px;
  margin-left: 3em;
  border-radius: 10px;
  background-color: #435cc8;

  &:hover {
    background-color: #324a9e;
  }
`;
