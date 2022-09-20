import React from 'react';
import styled from 'styled-components';
import ContentListTitleBlock from '../original-text/ContentListBlock/ContentListTitleBlock';
import DisplaySelectedListBlock from '../original-text/DisplayBlock/DisplaySelectedListBlock';
import SidebarBlock from '../original-text/SidebarBlock/SidebarBlock';
import SortBlock from '../original-text/SortBlock/SortBlock';

const MainContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 75vh;
  margin: 1px 20px;
`;

function ContentLayout({ title = '', depth, children }) {
  return (
    <>
      <DisplaySelectedListBlock />
      <SortBlock />
      <MainContentBlock>
        <SidebarBlock depth={depth} />
        <ContentListTitleBlock title={title}>{children}</ContentListTitleBlock>
      </MainContentBlock>
    </>
  );
}

export default ContentLayout;
