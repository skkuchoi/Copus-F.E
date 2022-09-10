import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopBarBlockPositioner = styled.div`
  background-color: #35644f;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding: 5px 3px;
  color: white;
`;

const LeftTitle = styled.div`
  padding-left: 30px;
  font-size: 15px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const RightMenuList = styled.ul`
  flex-grow: 1;
  margin: 0;
  padding: 0;
  margin-right: 5px;
`;

const RightMenuElement = styled.li`
  display: inline;
  float: right;
  text-decoration: none;
  margin-right: 50px;
  width: auto;
  font-size: 15px;
  text-align: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 505px) {
    display: none;
  }
`;

function TopBarBlock() {
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
    <TopBarBlockPositioner id="top">
      <LeftTitle>The Global Leader, SKKU</LeftTitle>

      <RightMenuList>
        <Link to="/signup">
          <RightMenuElement>회원가입</RightMenuElement>
        </Link>
        {isLogin && (
          <RightMenuElement onClick={onLogout}>로그아웃</RightMenuElement>
        )}
        {!isLogin && (
          <Link to="/login">
            <RightMenuElement>로그인</RightMenuElement>
          </Link>
        )}
        {isLogin && (
          <Link to="/myaccount">
            <RightMenuElement>마이페이지</RightMenuElement>
          </Link>
        )}
      </RightMenuList>
    </TopBarBlockPositioner>
  );
}

export default TopBarBlock;
