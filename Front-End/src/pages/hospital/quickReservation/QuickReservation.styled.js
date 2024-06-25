import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InfoTitle = styled.span`
  color: #2276d2;
  font-size: 20px;
  font-weight: bolder;
  padding-left: 10px;
`;

export const InfoBox = styled.div`
  width: 60%;
  padding: 25px;
  font-size: 16px;
  border: 1px dashed #aaaaaa;
`;

export const InfoList = styled.ul`
  list-style: none; // 기본 불릿 제거
  padding-left: 20px;

  li {
    position: relative;
    padding-left: 1em;
    line-height: 2em;

    &::before {
      content: "•"; // 불릿 문자
      position: absolute;
      left: 0;
      font-size: 1em; // 불릿 크기
      line-height: 1.5em;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 4em 0 1em 0;
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
  margin-left: 10px;
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
