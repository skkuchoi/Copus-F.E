import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ContentTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
`;

const ContentSubTitle = styled.span`
  font-size: 14px;
  margin: 0;
`;

const ContentCardPositioner = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ContentCard = styled.div`
  border: 1px solid #dadce0;
  border-radius: 15px;
  margin: 15px 15px;
  width: 300px;
  text-align: center;
  padding: 20px 5px;

  &:hover {
    background-color: #f1f3f4;
    cursor: pointer;
  }
`;

const CardTitle = styled.h2`
  font-size: 25px;
  margin-top: 0;
  margin-bottom: 5px;
`;

const CardExplanation = styled.span`
  font-size: 14px;
`;

function MenuCardBlock({ menuTitle, menuSubTitle, cardTitle, cardSubTitle }) {
  const firstMenu = useRef();
  const secondMenu = useRef();

  const [firstMenuOpen, setfirstMenuOpen] = useState(true);
  const [secondMenuOpen, setSecondMenuOpen] = useState(false);
  const onClickMenu = (element) => {
    switch (element.current.innerText) {
      case '계정 정보 확인':
        setfirstMenuOpen(!firstMenuOpen);
        if (secondMenuOpen) setSecondMenuOpen(!secondMenuOpen);
        break;
      case '비밀번호 변경':
        setSecondMenuOpen(!secondMenuOpen);
        if (firstMenuOpen) setfirstMenuOpen(!firstMenuOpen);
        break;
      default:
        break;
    }
    console.log(element.current.innerText);
  };
  
  return (
    <>
      <ContentTitle>{menuTitle}</ContentTitle>
      <ContentSubTitle>{menuSubTitle}</ContentSubTitle>

      <ContentCardPositioner>
        <ContentCard
          onClick={() => {
            onClickMenu(firstMenu);
          }}>
          <CardTitle ref={firstMenu}>{cardTitle}</CardTitle>
          <CardExplanation>{cardSubTitle}</CardExplanation>
        </ContentCard>

        {/* <ContentCard
          onClick={() => {
            onClickMenu(secondMenu);
          }}>
          <CardTitle ref={secondMenu}>비밀번호 변경</CardTitle>
          <CardExplanation>비밀번호를 변경합니다.</CardExplanation>
        </ContentCard> */}
      </ContentCardPositioner>
    </>
  );
}

export default MenuCardBlock;
