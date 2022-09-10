import React from 'react';
import Layout from '../../../components/shared/Layout';
import DisplaySelectedListBlock from '../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';
import MainContentBlock from '../../../components/original-text/MainContentBlock';
import SortBlock from '../../../components/original-text/SortBlock/SortBlock';

function OriginalTextId() {
  return (
    <Layout>
      <DisplaySelectedListBlock />
      <MainContentBlock>
        <SortBlock open={false} />
      </MainContentBlock>
    </Layout>
  );
}

export default OriginalTextId;
