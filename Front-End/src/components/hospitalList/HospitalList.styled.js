import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 68%;
  flex: 1;
  margin-top: 20px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Info = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const Actions = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 1em;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: white;

  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #324a9e;
    border: 1px solid #435cc8;
    font-weight: bold;
  }
`;

export const Placeholder = styled.div`
  width: 50px; /* 필요에 따라 조정 가능 */
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2em;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  height: 40px;
  width: 40px;
  padding: 8px 12px;
  margin: 0 5px;
  font-size: 14px;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #435cc8;
  }

  &:disabled {
    background-color: #435cc8;
    cursor: not-allowed;
  }
`;
