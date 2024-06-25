import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 230px;
  border-radius: 10px;
  margin-right: 20px;
  background-color: #643dff;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 0;
  margin-left: -1em;
  font-size: 20px;
`;

export const Content = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const Img = styled.img`
  width: 18em;
  height: 13em;
  margin-right: 10px;
`;

export const BannerButton = styled.button`
  cursor: pointer;
  border: none;
  width: 200px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  margin-top: 30px;
  background-color: white;
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
