import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import DisplaySelectedListBlock from '../../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';
import MainContentBlock from '../../../../components/original-text/MainContentBlock';
import ContentListBlock from '../../../../components/original-text/ContentListBlock/ContentListBlock';
import BookContentListBlock from '../../../../components/original-text/ContentListBlock/bybook/BookContentListBlock';
import useAsync from '../../../../hooks/useAsync';
import SortBlock from '../../../../components/original-text/SortBlock/SortBlock';
import getBookList from '../../../../api/Explore/bybook/getBookList';
import BookTable from '../../../../components/original-text/ContentListBlock/BookTable';
import ContentLayout from '../../../../components/shared/ContentLayout';
import ContentListTitleBlock from '../../../../components/original-text/ContentListBlock/ContentListTitleBlock';

function OriginalTextCategory() {
  const { literature, consonant } = useParams();
  const { pathname } = useLocation();
  const bybook = pathname.includes('bybook');

  // consonant 바뀔때마다 호출
  const [state] = useAsync(
    () => getBookList(literature, consonant),
    [consonant],
  );

  //console.log('state: ', state);

  //state 가지고 분석하여.. props로 잘 넘기기 to BookContentListBlock
  return (
    <Layout>
      <ContentLayout open={true}>
        <BookTable />
        {bybook && consonant && <BookContentListBlock />}
      </ContentLayout>
    </Layout>
  );
}

export default OriginalTextCategory;
