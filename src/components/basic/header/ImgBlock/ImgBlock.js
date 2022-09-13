import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImgPositioner = styled.div`
  margin-left: 40px;

  @media screen and (max-width: 800px) {
    display: flex;
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
    <ImgPositioner>
      <Link to="/">
        <LogoImg
          src={process.env.PUBLIC_URL + '/img/common/skku-logo-black.png'}
          alt="skku-logo-black"
        />
      </Link>
    </ImgPositioner>
  );
}

export default ImgBlock;
