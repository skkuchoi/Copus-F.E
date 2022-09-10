import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './skku-logo.png';

const LogoImgBlock = styled.div`
  margin-left: 40px;

  @media screen and (max-width : 800px){
    display : flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoImg = styled.img`
  width: 250px;
  height: 80px;
`;

function ImgBlock() {
  return (
    <LogoImgBlock>
      <Link to="/">
        <LogoImg src={logo} />
      </Link>
    </LogoImgBlock>
  );
}

export default ImgBlock;
