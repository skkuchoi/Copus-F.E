import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import DisplaySelectedListBlock from '../../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';
import MainContentBlock from '../../../../components/original-text/MainContentBlock';
import ContentListBlock from '../../../../components/original-text/ContentListBlock/ContentListBlock';
import MuncheContentListBlock from '../../../../components/original-text/ContentListBlock/bybook/MuncheLContentListBlock';
import SortBlock from '../../../../components/original-text/SortBlock/SortBlock';

import useAsync from '../../../../hooks/useAsync';
import getMuncheList from '../../../../api/Explore/bybook/getMuncheList';

function OriginalTextMunche() {
  const { literature, consonant, bookname, gwoncha } = useParams();

  // gwoncha 바뀔때마다 호출
  const [state] = useAsync(
    () => getMuncheList(literature, consonant, bookname, gwoncha),
    [gwoncha],
  );
  return (
    <Layout>
      <DisplaySelectedListBlock />
      <MainContentBlock>
        <SortBlock open={true} />
        <ContentListBlock>
          {gwoncha && <MuncheContentListBlock />}
        </ContentListBlock>
      </MainContentBlock>
    </Layout>
  );
}

export default OriginalTextMunche;
