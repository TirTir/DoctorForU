import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 250px);
  height: 100vh;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 11em;
  width: 100%;
  background: #f4f6f9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 30px;
  background-image: linear-gradient(to right, #f3f3f3 15%, white 15%);
`;

export const InputForm = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  border-top: 1px solid #aaaaaa;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 28%;
  height: 50px;
  margin-left: 60px;
  border: 1px solid #aaaaaa;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  margin-left: 10px;
  height: 40px;
  width: 100%;
`;

export const Label = styled.label`
  width: 10%;
  margin: 0 0 5px 15px;
`;

export const Error = styled.span`
  display: flex;
  align-self: flex-end;
  font-size: 12px;
  font-weight: bold;
  margin: 7px;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  margin-right: 3.8em;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  width: 120px;
  height: 50px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #435cc8;
`;
