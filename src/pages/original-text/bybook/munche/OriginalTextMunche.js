import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import ContentLayout from '../../../../components/shared/ContentLayout';
import MuncheContentListBlock from '../../../../components/original-text/ContentListBlock/bybook/MuncheLContentListBlock';

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
      <ContentLayout open={true} title={bookname}>
        <MuncheContentListBlock />
      </ContentLayout>
    </Layout>
  );
}

export default OriginalTextMunche;
