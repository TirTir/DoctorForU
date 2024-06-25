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

export const LoginInfo = styled.div`
  ${sharedContainerStyles}
  flex-direction: column;
  justify-content: center;
  height: 30%;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const LoginForm = styled.div`
  ${sharedContainerStyles}
  width: 400px;
  height: 60px;
  margin: 8px;
  font-size: 15px;
  border: 1px solid #8e8e8e;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 15px;
  opacity: 0.55;
  margin: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 400px;
  height: 60px;
  margin: 8px;
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
  width: 200px;
  margin: 5px;
  border: 1px solid #eef0f3;
`;

export const SocialContainer = styled.div`
  ${sharedContainerStyles}
  flex-direction: row;
`;
