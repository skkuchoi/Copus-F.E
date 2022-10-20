import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../../shared/linkStyle.css';

const HeaderPositioner = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${process.env.PUBLIC_URL + '/img/home/header/bg.png'});
  background-size: 100% 100%;
  overflow-x: hidden;
  @media screen and (min-width: 1600px) {
    height: 35vh;
  }
`;

const MenubarPositioner = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
`;

const LogoImgPositioner = styled.img`
  width: 250px;
  height: 80px;
  cursor: pointer;
`;

const MenuElementPositioner = styled.div`
  width: fit-content;
  padding-right: 30px;
`;

const MenuName = styled.span`
  font-size: 15px;
  color: white;
  font-weight: bold;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    cursor: pointer;
  }
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
    <HeaderPositioner>
      <MenubarPositioner>
        <Link to="/">
          <LogoImgPositioner
            src={
              process.env.PUBLIC_URL + '/img/home/header/skku-logo-white.png'
            }
            alt="skku-logo-white"
          />
        </Link>
        <MenuElementPositioner>
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
        </MenuElementPositioner>
      </MenubarPositioner>
    </HeaderPositioner>
  );
}

export default HeaderBlock;
