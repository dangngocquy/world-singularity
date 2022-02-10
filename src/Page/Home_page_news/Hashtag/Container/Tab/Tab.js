import styled from "styled-components";

export const Tabs = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(146, 171, 207);
  margin-bottom: 1rem;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 1rem;
  position: relative;
  font-size: 12px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: rgb(15, 23, 36);
  color: ${props => (props.active ? "rgb(17, 236, 229)" : "")};
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
