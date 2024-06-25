import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #f4f6f9 25%, #ffffff 20%);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 11em;
  width: 83%;
  padding-top: 50px;
`;

export const InfoBox = styled.div`
  padding: 20px;
  margin: 40px;
  border: 1px dashed #aaaaaa;
`;

export const InfoTitle = styled.span`
  color: #2276d2;
  font-size: 18px;
  font-weight: bolder;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  padding: 20px;
  background-color: #f4f6f9;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  width: 15%;
  border: 1px solid #aaaaaa;
  background-color: white;
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
  margin-right: 20px;
  font-weight: bold;
`;

export const Required = styled.span`
  margin-left: 5px;
  color: red;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  margin-right: 3.8em;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin: 30px;
  width: 300px;
  height: 50px;
  border: none;
  color: white;
  background-color: #435cc8;
`;
