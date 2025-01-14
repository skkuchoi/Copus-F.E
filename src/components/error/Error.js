import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Positioner = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const GuidePositioner = styled.div`
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

const ButtonPositioner = styled.div`
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
function Error({ guideTitle, guideText1, guideText2, errorNum }) {
  const navigate = useNavigate();
  return (
    <Positioner>
      <img src={process.env.PUBLIC_URL + '/img/error/error-icon.png'} alt="" />
      <GuidePositioner>
        <GuideTitle>{guideTitle}</GuideTitle>
        <GuideText>{guideText1}</GuideText>
        <GuideText>{guideText2}</GuideText>
      </GuidePositioner>
      <ButtonPositioner>
        <Button onClick={() => navigate(-1)}>이전 화면</Button>
        <Link to="/">
          <Button>홈으로 가기</Button>
        </Link>
      </ButtonPositioner>
      <ErrorNum>{errorNum}</ErrorNum>
    </Positioner>
  );
}

export default Error;
