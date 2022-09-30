import React, { useContext } from 'react';
import styled from 'styled-components';
import { leftBlockDepth } from '../../../pages/menuExplore/MenuExploreBook';
import { authorContext, seojiContext } from '../../shared/ContentLayout';

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
  children,
}) {
  const depthContext = useContext(leftBlockDepth);
  const clickSeojiContext = useContext(seojiContext);
  const clickAuthorContext = useContext(authorContext);
  //console.log('전달받은 clickId: ', clickId);
  return (
    <ContentListTablePositioner
      border={border}
      bgColor={bgColor}
      onClick={() => {
        // depthContext.setDepth(0);
        if (authorName !== '') {
          clickAuthorContext.setClickAuthor(authorName);
          depthContext.setDepth(0);
        }
        depthContext.setDepth(1);
        clickSeojiContext.setClickSeoji(clickId);
        //console.log('seojiContext 변경됐어: ', clickSeojiContext.clickSeoji);
      }}>
      {children}
    </ContentListTablePositioner>
  );
}

export default BookTableBlock;
