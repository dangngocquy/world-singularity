import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiArrowUpSLine } from 'react-icons/ri';

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 20px;
  right: 20px;
  align-items: center;
  height: 40px;
  width: 40px;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
  animation: fadeIn 0.3s;
  background: linear-gradient(65deg, rgb(17, 236, 229) 30%, rgb(17, 236, 229) 114%);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
  isScrollButtonVisible ? 'flex' : 'none'};
  color: rgb(15, 23, 36);
  font-size: 30px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  &:hover {
    transform: translate(0,-10px);
    transition: all 0.17s ease-in-out;
  };
  @media screen and (max-width: 850px) {
  display: none;
  };
  @media screen and (min-width: 670px) and (max-width: 650px) {
  display: none;
  };
  @media screen and (max-width: 1250px){
  display: none;
  };
`;

const Back_to_top = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 420) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 420) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/*<div className="Home_Download">
           <button>Tải ứng dụng</button>
      </div>*/}
      <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
        <RiArrowUpSLine />
      </ButtonContainer>
    </div>
  );
};

export default Back_to_top;