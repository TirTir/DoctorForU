import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100% - 250px);
  padding: 30px;
  background-color: #ecf0f1;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
