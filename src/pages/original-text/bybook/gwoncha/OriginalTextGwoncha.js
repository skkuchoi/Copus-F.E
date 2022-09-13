import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import GwonchaContentListBlock from '../../../../components/original-text/ContentListBlock/bybook/GwonchaContentListBlock';

import useAsync from '../../../../hooks/useAsync';
import getGwonchaList from '../../../../api/Explore/bybook/getGwonchaList';
import ContentLayout from '../../../../components/shared/ContentLayout';

function OriginalTextGwoncha() {
  const { literature, consonant, bookname } = useParams();

  // bookname 바뀔때마다 호출
  const [state] = useAsync(
    () => getGwonchaList(literature, consonant, bookname),
    [bookname],
  );

  return (
    <Layout>
      <ContentLayout open={true} title={bookname}>
        <GwonchaContentListBlock />
      </ContentLayout>
    </Layout>
  );
}

export default OriginalTextGwoncha;
