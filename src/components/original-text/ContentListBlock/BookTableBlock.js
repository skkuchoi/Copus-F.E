import React, { useContext } from 'react';
import styled from 'styled-components';
import { leftBlockDepth } from '../../../pages/menuExplore/consonant/Consonant';
import { seojiContext } from '../../shared/ContentLayout';

const ContentListTablePositioner = styled.div`
  display: grid;
  width: 100%;
  //번호 이름 저자 간행연도 부가정보
  grid-template-columns: 0.5fr 4fr 2fr 1.5fr 1.5fr 3fr;
  border-top: ${(props) => props.border};
  border-bottom: 1.5px solid #dadce0;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.bgColor};
    cursor: pointer;
  }
`;

function BookTableBlock({
  border = 'none',
  bgColor = 'none',
  clickId = '',
  children,
}) {
  const depthContext = useContext(leftBlockDepth);
  const clickSeojiContext = useContext(seojiContext);
  return (
    <ContentListTablePositioner
      border={border}
      bgColor={bgColor}
      onClick={() => {
        depthContext.setDepth(1);
        clickSeojiContext.setClickSeoji(clickId);
      }}>
      {children}
    </ContentListTablePositioner>
  );
}

export default BookTableBlock;
