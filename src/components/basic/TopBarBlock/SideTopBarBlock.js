import React from 'react';
import styled from 'styled-components';
import { GiNotebook } from 'react-icons/gi';
import BookImg from '../TopBarBlock/BookImg.png';

const TopBarBlock = styled.div`
  background-color: #35644f;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 5px 3px;
  color: white;
`;

const BookIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${BookImg});
  background-size: 100% 100%;
`;

const LeftTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 17px;
  margin-left: 10px;
  gap: 5px;
  font-weight: bold;
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

function SideTopBarBlock() {
  return (
    <TopBarBlock>
      <LeftTitle>
        <BookIcon />
        범례
      </LeftTitle>
    </TopBarBlock>
  );
}

export default SideTopBarBlock;
