import React, { useContext } from 'react';
import styled from 'styled-components';
import { leftBlockDepth } from '../../../pages/menuExplore/MenuExplore';
import {
  currentFocusTitleContext,
  authorContext,
  seojiContext,
} from '../../shared/ContentLayout';

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
  authorName = '',
  currentTitle = '',
  from = '',
  children,
}) {
  const depthContext = useContext(leftBlockDepth);
  const currentFocusTitle = useContext(currentFocusTitleContext);
  const clickSeojiContext = useContext(seojiContext);
  const clickAuthorContext = useContext(authorContext);

  if (from === 'search') {
    depthContext.setDepth(1);
    clickSeojiContext.setClickSeoji(clickId);
    currentFocusTitle.setCurrentFocusTitle(currentTitle);
    return;
  }
  return (
    <ContentListTablePositioner
      border={border}
      bgColor={bgColor}
      onClick={(e) => {
        if (
          e.target.innerHTML !== '범례' &&
          e.target.innerHTML !== '목차' &&
          e.target.innerHTML !== '해제'
        ) {
          if (authorName) {
            depthContext.setDepth(0);
            clickAuthorContext.setClickAuthor(Number(authorName));
          }
          depthContext.setDepth(1);
          clickSeojiContext.setClickSeoji(clickId);
          currentFocusTitle.setCurrentFocusTitle(currentTitle);
        }
      }}>
      {children}
    </ContentListTablePositioner>
  );
}

export default BookTableBlock;
