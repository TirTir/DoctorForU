import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: #f4f6f9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 40px;
  gap: 20px;
`;

export const Card = styled.div`
  width: 100%;
  height: 130px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: white;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 50px;
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
`;

export const Line = styled.div`
  width: 95%;
  margin: 20px 0;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  width: 130px;
  height: 40px;
  font-size: 20px;
  margin: 1em;
  border-radius: 10px;
  background-color: #324a9e;

  &:hover {
    background-color: #4cc8;
  }
`;

export const Table = styled.table`
  width: 95%;
  margin-left: 30px;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  height: 40px;
  border-bottom: 1px solid #ddd;
  color: #a5b3c0;
  padding: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  padding: 8px;
`;

export const TableCell = styled.td`
  height: 30px;
  border-top: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  display: inline-block;
  width: 100px;
  height: 30px;
  border: 2px solid #ddd;
  position: relative;
`;
