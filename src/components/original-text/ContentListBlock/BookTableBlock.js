import React from 'react';
import styled from 'styled-components';

const ContentListTablePositioner = styled.div`
  display: grid;
  width: 100%;
  //번호 이름 저자 간행연도
  grid-template-columns: 1fr 4fr 2fr 2fr 1fr;
  border-top: ${(props) => props.border};
  border-bottom: 1.5px solid #dadce0;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.bgColor};
  }
`;

function BookTableBlock({ border = 'none', bgColor = 'none', children }) {
  return (
    <ContentListTablePositioner border={border} bgColor={bgColor}>
      {children}
    </ContentListTablePositioner>
  );
}

export default BookTableBlock;
