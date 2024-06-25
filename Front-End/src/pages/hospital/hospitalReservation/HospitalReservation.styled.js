import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60em;
  height: 100%;
  padding: 60px 0 0 70px;
  margin-bottom: 60px;
  background: linear-gradient(to bottom, #f4f6f9 280px, #ffffff 20px);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 50em;
  padding: 20px;
  margin: 40px 0;
  border: solid 1px #ddd;
  border-radius: 10px;
  background-color: white;
`;

export const ReservationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Img = styled.img`
  height: 130px;
  width: 150px;
  margin: 0 20px;
`;

export const TimeContainer = styled.div`
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
