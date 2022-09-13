import React from 'react';
import Layout from '../../../components/shared/Layout';
import DisplaySelectedListBlock from '../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';

import SortBlock from '../../../components/original-text/SortBlock/SortBlock';
import styled from 'styled-components';

const MainContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  margin: 12px 20px;
`;

function OriginalTextId() {
  return (
    <Layout>
      <DisplaySelectedListBlock />
      <SortBlock open={false} />
      <MainContentBlock />
    </Layout>
  );
}

export default OriginalTextId;
