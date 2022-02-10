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
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid rgb(146, 171, 207);
  border-bottom: ${props => (props.active ? "3px solid rgba(255, 87, 89, 1)" : "")};
  opacity: 0.5;
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
