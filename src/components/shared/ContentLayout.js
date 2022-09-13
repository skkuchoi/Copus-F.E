import React from 'react';
import styled from 'styled-components';
import ContentListTitleBlock from '../original-text/ContentListBlock/ContentListTitleBlock';
import DisplaySelectedListBlock from '../original-text/DisplayBlock/DisplaySelectedListBlock';
import SortBlock from '../original-text/SortBlock/SortBlock';

const MainContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  margin:12px 20px;
`;

function ContentLayout({ open = false, children }) {
  return (
    <>
      <DisplaySelectedListBlock />
      <SortBlock open={open} />
      <MainContentBlock>
        <ContentListTitleBlock title="총 리스트" />
        {children}
      </MainContentBlock>
    </>
  );
}

export default ContentLayout;
