import React from 'react';
import styled from 'styled-components';
import ResultDataBlock from './ResultDataBlock/ResultDataBlock';
import DisplaySelectedListBlock from './DisplayBlock/DisplaySelectedListBlock';
import SidebarBlock from './SidebarBlock/SidebarBlock';

const MainContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
`;

const ContentPositioner = styled.div`
  width: 85%;
  padding: 7px 10px;
  display: flex;
  flex-direction: column;
`;

function SearchResultLayout({ leftDatas, rightDatas }) {
  return (
    <>
      <DisplaySelectedListBlock totalCount={leftDatas.totalCount} />

      <MainContentBlock>
        <SidebarBlock leftDatas={leftDatas} />

        <ContentPositioner>
          <ResultDataBlock rightDatas={rightDatas} />
        </ContentPositioner>
      </MainContentBlock>
    </>
  );
}

export default SearchResultLayout;
