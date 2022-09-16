import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import ContentLayout from '../../../../components/shared/ContentLayout';
import GwonchaContentListBlock from '../../../../components/original-text/ContentListBlock/byauthor/GwonchaContentListBlock';

import getGwonchaList from '../../../../api/Explore/byauthor/getGwonchaList';
import useAsync from '../../../../hooks/useAsync';

function OriginalTextGwoncha() {
  const { literature, consonant, authorname, bookname } = useParams();

  // bookname 바뀔때마다 호출
  const [state] = useAsync(
    () => getGwonchaList(literature, consonant, authorname, bookname),
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
