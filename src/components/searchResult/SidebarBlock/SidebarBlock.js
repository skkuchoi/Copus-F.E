import React from 'react';
import styled from 'styled-components';
import CategoryListBlock from './CategoryListBlock';
import { KindListBlock } from './KindListBlock';
import { useParams } from 'react-router-dom';

const SidebarsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 75vh;
  overflow: auto;
  padding: 7px 10px;
`;

function SidebarBlock({ bookResultNum, authorResultNum, textResultNum }) {
  const totalResultNum = bookResultNum + authorResultNum + textResultNum;
  return (
    <SidebarsBlock>
      <KindListBlock element="연행록" number={totalResultNum} />
      <CategoryListBlock
        title="연행록"
        bookResultNum={bookResultNum}
        authorResultNum={authorResultNum}
        textResultNum={textResultNum}
      />
    </SidebarsBlock>
  );
}

export default SidebarBlock;
