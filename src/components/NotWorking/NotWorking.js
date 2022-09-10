import React from 'react';
import styled from 'styled-components';
import notFoundIcon from './notFoundIcon.png';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundBlock = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const GuideBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const GuideTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const GuideText = styled.span`
  font-size: 15px;
  margin-bottom: 5px;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  background-color: #35644f;
  color: white;
  border: transparent;
  font-size: 20px;
  width: fit-content;
  height: 40px;
  margin-left: 25px;
  padding: 0px 10px;
  cursor: pointer;

  &:hover {
    background-color: #92d050;
    color: black;
  }
`;

const ErrorNum = styled.div`
  font-size: 13px;
  margin-top: 10px;
`;
function NotWorking() {
  const navigate = useNavigate();
  return (
    <NotFoundBlock>
      <img src={notFoundIcon} alt="" />
      <GuideBlock>
        <GuideTitle>페이지를 표시할 수 없습니다.</GuideTitle>
        <GuideText>
          시스템 서버 에러가 발생하여 페이지를 표시할 수 없습니다.
        </GuideText>
        <GuideText>
          관리자에게 문의하거나 잠시 후 다시 시도해주시기 바랍니다.
        </GuideText>
      </GuideBlock>
      <ButtonBlock>
        <Button onClick={() => navigate(-1)}>이전 화면</Button>

        <Link to="/">
          <Button>홈으로 가기</Button>
        </Link>
      </ButtonBlock>
      <ErrorNum>Error 500</ErrorNum>
    </NotFoundBlock>
  );
}

export default NotWorking;
