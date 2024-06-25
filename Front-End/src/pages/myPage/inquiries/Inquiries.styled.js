import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 250px);
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 11em;
  width: 100%;
  background: #f4f6f9;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 40px;
`;

export const TableHeader = styled.th`
  height: 40px;
  border-top: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  text-align: center;
`;

export const TableRow = styled.tr`
  height: 50px;
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;

export const TableCell = styled.td`
  cursor: pointer;
  padding: 8px;
  text-align: center;
`;

export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  color: #888;
  height: 5em;
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 100%;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
`;

export const Button = styled.button`
  border: none;
  width: 25%;
  height: 40px;
  margin: 4em;
  color: white;
  background-color: #435cc8;
`;
