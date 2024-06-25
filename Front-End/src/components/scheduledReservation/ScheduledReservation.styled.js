import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 560px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 30px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Line = styled.div`
  border: 1px solid #ddd;
  width: 95%;
`;

export const CalendarButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  width: 50px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  border: none;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#435CC8" : "white")};
  color: ${(props) => (props.primary ? "white" : "#435CC8")};
  border: ${(props) => (props.primary ? "none" : "2px solid #435CC8")};
  padding: 10px 20px;
  margin: 15px;
  width: 120px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#324A9E" : "#white")};
    color: ${(props) => (props.primary ? "white" : "#324A9E")};
    font-weight: ${(props) => (props.primary ? "" : "bold")};
  }
`;

export const TimeContainer = styled.div`
  width: 60%;
  overflow-y: scroll;
`;

export const Table = styled.table`
  width: 95%;
  border-collapse: collapse;
  text-align: center;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;

export const TableCell = styled.td`
  height: 30px;
  border-bottom: 1px solid #ddd;
  padding: 8px 20px;
  font-size: 15px;
  font-weight: bold;
  color: #808c99;
  text-align: center;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #888;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
`;
