import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Logo from './skku-logo.png';
import { Link } from 'react-router-dom';

const AccountBlockPositioner = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  height: 100vh;
`;

const ImgPositioner = styled.div`
  margin-top: 20px;
`;

const LogoImg = styled.img`
  width: 300px;
  height: 100px;
`;

const AccountFormBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 25px;
`;

function BlockPositioner({ children }) {
  return (
    <AccountBlockPositioner>
      <ImgPositioner>
        <Link to="/">
          <LogoImg src={Logo} />
        </Link>
      </ImgPositioner>

      <AccountFormBlock>{children}</AccountFormBlock>

      <Footer />
    </AccountBlockPositioner>
  );
}

export default BlockPositioner;
