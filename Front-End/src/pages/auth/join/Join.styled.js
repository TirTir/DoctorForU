import styled, { css } from "styled-components";

// Common Styles
const sharedContainerStyles = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${sharedContainerStyles}
  flex-direction: column;
  margin: 2%;
`;

export const JoinInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  padding: 0 0 0 30px;
  font-size: 15px;
  background-color: #e8f0f5;
`;

export const JoinContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const JoinForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 1430px;
  margin: 100px 0 0 0;
`;

export const InputForm = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #aaaaaa;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 28%;
  height: 50px;
  margin-left: 50px;
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
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Required = styled.span`
  margin-left: 5px;
  color: red;
`;

export const CheckButton = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 100px;
  height: 50px;
  margin-left: 10px;
  border: none;
  color: white;
  background-color: #777777;
`;
export const Button = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  width: 400px;
  height: 60px;
  margin: 80px 0 8px 0;
  font-size: 15px;
  border: none;
  color: white;
  background-color: #435cc8;
`;

export const LineContainer = styled.div`
  ${sharedContainerStyles}
  flex-direction: row;
  margin: 15px;
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  width: 100%;
`;

export const SocialContainer = styled.div`
  ${sharedContainerStyles}
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Error = styled.span`
  display: flex;
  align-self: flex-end;
  font-size: 12px;
  font-weight: bold;
  margin: 7px;
`;
