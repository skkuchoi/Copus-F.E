import React from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../../../../components/shared/Layout';
import DisplaySelectedListBlock from '../../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';
import SortBlock from '../../../../components/original-text/SortBlock/SortBlock';
import MainContentBlock from '../../../../components/original-text/MainContentBlock';
import ContentListBlock from '../../../../components/original-text/ContentListBlock/ContentListBlock';
import TitleContentListBlock from '../../../../components/original-text/ContentListBlock/bybook/TitleContentListBlock';

import useAsync from '../../../../hooks/useAsync';
import getTitleList from '../../../../api/Explore/bybook/getTitleList';
import ContentLayout from '../../../../components/shared/ContentLayout';

function OriginalTextTitle() {
  const { literature, consonant, bookname, gwoncha, munche } = useParams();

  // munche 바뀔때마다 호출
  const [state] = useAsync(
    () => getTitleList(literature, consonant, bookname, gwoncha, munche),
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
