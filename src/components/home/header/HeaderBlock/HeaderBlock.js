import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bg from './bg.png';
import logo from './skku-logo-white.png';

const HeadersBlock = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
  .link-line {
    list-style: none;
    text-decoration-line: none;
  }
`;

const MenubarBlock = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  width: 98.7%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
`;

const LogoImgBlock = styled.img`
  width: 250px;
  height: 80px;
  cursor: pointer;
`;

const MenuBlock = styled.div`
  width: fit-content;
  padding-right: 30px;
`;

const MenuName = styled.span`
  font-size: 15px;
  color: white;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
`;

function HeaderBlock() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('id') === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  const onLogout = () => {
    sessionStorage.removeItem('id');
    setIsLogin(false);
    document.location.href = '/';
  };

  return (
    <HeadersBlock>
      <MenubarBlock>
        <Link to="/">
          <LogoImgBlock src={logo} alt="logo" />
        </Link>
        <MenuBlock>
          {isLogin && (
            <Link to="/myaccount" className="link-line">
              <MenuName>마이페이지</MenuName>
            </Link>
          )}
          {isLogin && <MenuName onClick={onLogout}>로그아웃</MenuName>}
          {!isLogin && (
            <Link to="/login" className="link-line">
              <MenuName>로그인</MenuName>
            </Link>
          )}

          <Link to="/signup" className="link-line">
            <MenuName>회원가입</MenuName>
          </Link>
        </MenuBlock>
      </MenubarBlock>
    </HeadersBlock>
  );
}

export default HeaderBlock;
