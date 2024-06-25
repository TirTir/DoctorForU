import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 9px;
  width: 250px;
  height: auto;
  
  background-color: #435cc8;
  color: white;
  overflow: hidden;
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 100%;
  padding-left: 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? "#291958" : "inherit")};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
