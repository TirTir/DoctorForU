import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 275px;
  margin-top: 13px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 100%;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 10px;
`;

export const Title = styled.span`
  width: 5em;
  font-weight: bold;
`;

export const Box = styled.div`
  width: 18em;
  border: 1px solid #aaaaaa;
`;

export const Input = styled.textarea`
  font-size: 1em;
  width: 85%;
  height: 100%;
  resize: none;
  padding: 10px;
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
