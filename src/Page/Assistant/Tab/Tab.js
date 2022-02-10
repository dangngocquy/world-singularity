import styled from "styled-components";
export const Tabs = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  position: relative;
  font-size: 12px;
  display: flex;
  color: rgb(15, 23, 36);
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid rgb(15, 23, 36, 0.2);
  border-bottom: ${props => (props.active ? "3px solid rgb(17, 236, 229)" : "")};
  opacity: 0.8;
  opacity: ${props => (props.active ? "1" : "")};
  background: ${props => (props.active ? "transparent" : "transparent")};
  transition: background-color 0.5s ease-in-out;
  white-space: nowrap;

  // &:hover {
  //   background-color: green;
  // }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
