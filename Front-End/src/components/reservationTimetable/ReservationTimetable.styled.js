import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 400px;
  color: #808c99;
  overflow-y: scroll;
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 98%;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 95%;
  border-collapse: collapse;
  text-align: center;
`;

export const TableHeader = styled.th`
  height: 40px;
  padding: 8px 20px;
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

export const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 100px;
  height: 40px;
  color: white;
  font-weight: bold;
  background-color: #435cc8;
  border-radius: 5px;
`;
