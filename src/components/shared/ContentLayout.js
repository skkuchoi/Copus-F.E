import React, { createContext } from 'react';
import styled from 'styled-components';
import ContentListTitleBlock from '../original-text/ContentListBlock/ContentListTitleBlock';
import DisplaySelectedListBlock from '../original-text/DisplayBlock/DisplaySelectedListBlock';
import Depth1Sidebar from '../original-text/SidebarBlock/Depth1Sidebar';
import Depth2Sidebar from '../original-text/SidebarBlock/Depth2Sidebar';
import Depth3Sidebar from '../original-text/SidebarBlock/Depth3Sidebar';

import SidebarBlock from '../original-text/SidebarBlock/SidebarBlock';
import SortBlock from '../original-text/SortBlock/SortBlock';

const MainContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 75vh;
  margin: 1px 20px;
`;
//title 지워도됨
function ContentLayout({ title = '', depth, children }) {
  return (
    <>
      <DisplaySelectedListBlock />
      <SortBlock>
        <MainContentBlock>
          {depth === 1 && <Depth1Sidebar />}
          {depth === 2 && <Depth2Sidebar />}
          {depth === 3 && <Depth3Sidebar />}
          {/* <SidebarBlock depth={depth} /> */}
          {children}
        </MainContentBlock>
      </SortBlock>
    </>
  );
}

export default ContentLayout;
