import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import ContentLayout from '../../../../components/shared/ContentLayout';
import TitleContentListBlock from '../../../../components/original-text/ContentListBlock/byauthor/TitleContentListBlock';

import useAsync from '../../../../hooks/useAsync';
import getTitleList from '../../../../api/Explore/byauthor/getTitleList';

function OriginalTextTitle() {
  const { literature, consonant, authorname, bookname, gwoncha, munche } =
    useParams();

  // authorname 바뀔때마다 호출
  const [state] = useAsync(
    () =>
      getTitleList(
        literature,
        consonant,
        authorname,
        bookname,
        gwoncha,
        munche,
      ),
    [munche],
  );
  return (
    <Layout>
      <ContentLayout open={true} title={bookname}>
        <TitleContentListBlock />
      </ContentLayout>
    </Layout>
  );
}

export default OriginalTextTitle;
