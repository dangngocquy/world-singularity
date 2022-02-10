import styled from "styled-components";
import React from 'react';

export const Tabs = styled.div`
  background: rgb(15, 23, 36, 0.1);
  backdrop-filter: blur(21px);
  display: flex;
  // border-radius: 8px;
  flex-direction: row;
  width:100%;
  float: right;
  padding: 10px 20px;
   @media screen and (max-width: 1224px){
    flex-direction: column;
    width: auto;
    border-radius: 8px;
  }
  @media screen and (max-width: 700px) {
    flex-direction: row;
  }
  @media screen and (max-width: 600px) {
    flex-direction: row;
  }

`;


export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  font-size: 15px;
  font-weight:bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:6px;
  opacity: 0.9;
  opacity: ${props => (props.active ? "1" : "")};
  background: ${props => (props.active ? "transparent" : "transparent")};
  transition: background-color 0.5s ease-in-out;
  white-space: nowrap;
  padding: 0;
  // &:hover {
  //   background-color: green;
  // }
`;
export const Content = styled.div`
  // border-left: 2px solid rgb(146, 171, 207, 0.1);
  // border-bottom: 2px solid rgb(146, 171, 207, 0.1);
  // border-right: 2px solid rgb(146, 171, 207, 0.1);
  ${props => (props.active ? "animation: dropdown_animation .3s ease forwards;" : "display:none")};
  @media screen and (max-width: 600px) {
    padding: 0 2rem 2rem 2rem;
  }
  @media screen and (max-width: 700px) {
    padding: 0 2rem 2rem 2rem;
  }
  // display:flex;
  // justify-content:center;
  // align-items: center;

`;
export const TextNote = styled.div`
  ${props => (props.active ? "animation: tab_animation .3s ease forwards;" : "display:none")};
  font-size: 15px;
`;
