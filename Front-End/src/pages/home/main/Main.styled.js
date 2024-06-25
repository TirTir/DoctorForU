import background from "../../../assets/test3.png";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 50px;
  margin: 3em 0;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`;

export const BoxTitle = styled.span`
  margin-top: 5px;
  font-size: 13px;
  transition: color;
`;

export const Box = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;

  &:hover {
    border-color: #435cc8;
  }
  &:hover ${BoxTitle} {
    color: #435cc8;
    font-weight: bold;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;
