import styled from "styled-components";

export const Table = styled.table`
  width: 63%;
  margin: 30px;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHeader = styled.th`
  height: 40px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
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
