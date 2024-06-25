import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, #f4f6f9 280px, #ffffff 20px);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
  width: 70%;
  padding: 50px 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  padding: 10px;
  margin: 20px 0;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #435cc8;
`;

export const Select = styled.select`
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
  border: none;
  color: #8e8e8e;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 10px;
  height: 40px;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: #435cc8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  height: 100%;
  margin: 10px;
`;
