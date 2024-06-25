import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 280px;
  width: 100%;
  padding: 10px 0;
  margin-top: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
`;

export const Value = styled.span`
  font-size: 0.8em;
  font-weight: 15px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 60px;
  margin: 8px;
  font-size: 15px;
  border: 1px solid #8e8e8e;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  opacity: 0.55;
  margin: 10px;
`;

export const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 30px;
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
`;
