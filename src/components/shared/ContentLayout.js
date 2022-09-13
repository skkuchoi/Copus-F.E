import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContentListTitleBlock from '../original-text/ContentListBlock/ContentListTitleBlock';
import DisplaySelectedListBlock from '../original-text/DisplayBlock/DisplaySelectedListBlock';
import SortBlock from '../original-text/SortBlock/SortBlock';

const MainContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  margin: 12px 20px;
`;

function ContentLayout({ open = false, title, children }) {
  const { literature, consonant, bookname } = useParams();
  const linkToGwonchaList = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;
  return (
    <>
      <DisplaySelectedListBlock />
      <SortBlock open={open} />
      <MainContentBlock>
        <ContentListTitleBlock title={title} link={linkToGwonchaList} />
        {children}
      </MainContentBlock>
    </>
  );
}

export default ContentLayout;
