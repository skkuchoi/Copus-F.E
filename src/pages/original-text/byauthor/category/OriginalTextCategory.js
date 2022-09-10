import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';

import DisplaySelectedListBlock from '../../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';
import SortBlock from '../../../../components/original-text/SortBlock/SortBlock';
import MainContentBlock from '../../../../components/original-text/MainContentBlock';
import ContentListBlock from '../../../../components/original-text/ContentListBlock/ContentListBlock';
import AuthorContentListBlock from '../../../../components/original-text/ContentListBlock/byauthor/AuthorContentListBlock';
import useAsync from '../../../../hooks/useAsync';
import getBookList from '../../../../api/Explore/byauthor/getBookList';

function OriginalTextCategory() {
  const { pathname } = useLocation();
  const byauthor = pathname.includes('byauthor');
  const { literature, consonant } = useParams();
  // consonant 바뀔때마다 호출
  const [state] = useAsync(
    () => getBookList(literature, consonant),
    [consonant],
  );

  //state 가지고 분석하여.. props로 잘 넘기기
  //to AuthorContentListBlock
  return (
    <Layout>
      <DisplaySelectedListBlock />
      <MainContentBlock>
        <SortBlock open={true} />
        <ContentListBlock>
          {byauthor && consonant && <AuthorContentListBlock />}
        </ContentListBlock>
      </MainContentBlock>
    </Layout>
  );
}

export default OriginalTextCategory;
