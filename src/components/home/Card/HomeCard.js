import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';
import '../../shared/linkStyle.css';

const IndexPositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

const IndexContainer = styled.div`
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;
const IndexBox = styled.div`
  width: 35px;
  height: 38px;
  background-color: rgba(188, 248, 183);
  border-radius: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

const IndexText = styled.div`
  font-size: 20px;
  position: relative;
  left: -15px;
  font-weight: 400;
`;

const CardPositioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  gap: 40px;
`;

function HomeCard() {
  return (
    <>
      <IndexPositioner>
        <IndexContainer>
          <IndexBox />
          <IndexText>서비스 메뉴</IndexText>
        </IndexContainer>
      </IndexPositioner>

      <CardPositioner>
        <Link to="/menu-explore/book/A" className="link-line">
          <Card
            icon="1"
            title="코퍼스(Copus)"
            content={
              '고전문헌 한국문집총간에 대한\n정제된 데이터들을\n업로드합니다.'
            }
            cardColor="white"
          />
        </Link>

        <Link to="/about" className="link-line">
          <Card
            icon="2"
            title="코퍼스 소개"
            content={'성균한문고전코퍼스에\n대해 알아보세요.\n\n'}
            cardColor=" rgba(188, 248, 183)"
          />
        </Link>
        <Link to="/" className="link-line">
          <Card
            icon="3"
            title="코퍼스 위키(Wiki)"
            content={
              '고전문헌 데이터에\n규칙에 맞는 데이터를 추가하여\n새로운 연구를 시도합니다.'
            }
            cardColor="white"
          />
        </Link>
      </CardPositioner>
    </>
  );
}

export default HomeCard;
