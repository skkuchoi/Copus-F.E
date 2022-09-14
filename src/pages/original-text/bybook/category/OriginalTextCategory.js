import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import ContentLayout from '../../../../components/shared/ContentLayout';
import BookTableRowBlock from '../../../../components/original-text/ContentListBlock/BookTableRowBlock';
import BookContentListBlock from '../../../../components/original-text/ContentListBlock/bybook/BookContentListBlock';

import useAsync from '../../../../hooks/useAsync';
import getBookList from '../../../../api/Explore/bybook/getBookList';

function OriginalTextCategory() {
  const { literature, consonant } = useParams();

  // consonant 바뀔때마다 호출
  const [state] = useAsync(
    () => getBookList(literature, consonant),
    [consonant],
  );

  //console.log('state: ', state);

  //state 가지고 분석하여.. props로 잘 넘기기 to BookContentListBlock
  return (
    <Layout>
      <ContentLayout open={true} title="총 리스트">
        <BookTableRowBlock />
        <BookContentListBlock />
      </ContentLayout>
    </Layout>
  );
}

export default OriginalTextCategory;
