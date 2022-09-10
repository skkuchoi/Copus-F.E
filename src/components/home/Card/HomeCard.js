import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';

const IndexBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  margin-left: 23%;
  margin-top: 70px;
  justify-content: left;
`;

const Nemo = styled.div`
  width: 35px;
  height: 38px;
  background-color: rgba(188, 248, 183, 0.4);
  border-radius: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

const IndexText = styled.div`
  font-size: 20px;
  position: absolute;
  left: 24.2%;
  font-weight: 400;
`;

const CardBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 23%;
  gap: 40px;

  .link-line {
    list-style: none;
    text-decoration-line: none;
  }
`;

function HomeCard() {
  return (
    <>
      <IndexBlock>
        <Nemo />
        <IndexText>서비스 메뉴</IndexText>
      </IndexBlock>

      <CardBlock>
        <Link to="/original-text/연행록" className="link-line">
          <Card
            icon="1"
            title="코퍼스(Copus)"
            content={'고전문헌 연행록에 대한\n정제된 데이터들을\n업로드합니다.'}
            cardColor="white"
          />
        </Link>

        <Link to="/about" className="link-line">
          <Card
            icon="2"
            title="코퍼스 소개"
            content={'성균한문고전코퍼스에\n대해 알아보세요.\n\n'}
            cardColor="rgba(188, 248, 183, 0.4)"
          />
        </Link>
        <Link to="/original-text/연행록" className="link-line">
          <Card
            icon="3"
            title="코퍼스 위키(Wiki)"
            content={
              '고전문헌 데이터에\n규칙에 맞는 데이터를 추가하여\n새로운 연구를 시도합니다.'
            }
            cardColor="white"
          />
        </Link>
      </CardBlock>
    </>
  );
}

export default HomeCard;
