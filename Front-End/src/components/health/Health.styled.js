import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 280px;
  margin-top: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  width: 50px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  border: none;
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  height: 100%;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Calendar = styled.div`
  cursor: pointer;
  display: flex;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Td = styled.td`
  height: 25px;
  width: 25px;
  padding: 10px;
  margin: 0;
  border-radius: 50%;
  border: none;
  text-align: center;
  cursor: pointer;
  background-color: ${({ isToday }) => (isToday ? "#C6F7D9" : "white")};
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: white;
      background-color: #319dff;
      border: 1px solid #435cc8;
    `};
`;

export const TableCell = styled.td`
  height: 30px;
  border-top: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const TableRow = styled.tr`
  padding: 8px;
`;

export const Tr = styled.tr`
  width: 1em;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const HealthContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2em;
  gap: 40px;
`;

export const HealthContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #546678;
  font-weight: bold;
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  width: 130px;
  height: 100px;
  font-size: 20px;
  margin-left: 3em;
  border-radius: 10px;
  background-color: #435cc8;

  &:hover {
    background-color: #324a9e;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
`;
