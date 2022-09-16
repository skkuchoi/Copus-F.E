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

function SearchResultLayout({ bookResultNum, authorResultNum, textResultNum }) {
  const totalResultNum = bookResultNum + authorResultNum + textResultNum;
  return (
    <>
      <DisplaySelectedListBlock totalResultNum={totalResultNum} />

      <MainContentBlock>
        <SidebarBlock
          bookResultNum={bookResultNum}
          authorResultNum={authorResultNum}
          textResultNum={textResultNum}
        />

        <ContentPositioner>
          <ResultDataBlock
            bookResultNum={bookResultNum}
            authorResultNum={authorResultNum}
            textResultNum={textResultNum}
          />
        </ContentPositioner>
      </MainContentBlock>
    </>
  );
}

export default SearchResultLayout;
