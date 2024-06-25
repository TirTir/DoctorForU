import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 800px;
  padding: 40px;
  background-color: white;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 50px;
  padding: 10px;
  margin: 20px 0 40px 0;
  background-color: #435cc8;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  background-color: white;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 20px;
  margin-left: 10px;
  height: 40px;
  width: 300px;
`;

export const Line = styled.div`
  border: 1px solid #eef0f3;
  height: 90%;
  margin: 10px;
`;

export const Button = styled.button`
  background-color: #435cc8;
  color: white;
  border: none;

  cursor: pointer;
`;

export const Img = styled.img`
  width: 55px;
  height: 55px;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 2px solid #eef0f3;
  position: relative;
`;

export const ExerciseList = styled.ul`
  flex: 1;
  height: auto;
  list-style: none;
  padding: 0 20px;
  overflow-y: scroll;
`;

export const ExerciseListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const ExerciseName = styled.span`
  flex: 1;
  padding-left: 10px;
`;
