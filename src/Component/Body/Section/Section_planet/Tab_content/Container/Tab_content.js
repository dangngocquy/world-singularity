import React from 'react';
import styled from "styled-components";
export const Tabs = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:1.4rem;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  max-width: 130px;
  position: relative;
  font-size: 1em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:10px 7px;
  border: 3px solid rgb(17, 236, 229);
  border: ${props => (props.active ? "3px solid rgb(17, 236, 229)" : "")};
  opacity: 0.6;
  opacity: ${props => (props.active ? "1" : "")};
  background: ${props => (props.active ? "transparent" : "transparent")};
  transition: background-color 0.5s ease-in-out;

  // &:hover {
  //   background-color: green;
  // }
`;
export const Content = styled.div`
  ${props => (props.active ? "animation: dropdown_animation .3s ease forwards;" : "display:none")}
`;
