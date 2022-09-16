import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import ContentLayout from '../../../../components/shared/ContentLayout';
import MuncheContentListBlock from '../../../../components/original-text/ContentListBlock/byauthor/MuncheLContentListBlock';

import getMuncheList from '../../../../api/Explore/byauthor/getMuncheList';
import useAsync from '../../../../hooks/useAsync';

function OriginalTextMunche() {
  const { literature, consonant, authorname, bookname, gwoncha } = useParams();

  // authorname 바뀔때마다 호출
  const [state] = useAsync(
    () => getMuncheList(literature, consonant, authorname, bookname, gwoncha),
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
