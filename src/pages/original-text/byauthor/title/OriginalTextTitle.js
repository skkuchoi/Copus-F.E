import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import DisplaySelectedListBlock from '../../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';
import MainContentBlock from '../../../../components/original-text/MainContentBlock';
import ContentListBlock from '../../../../components/original-text/ContentListBlock/ContentListBlock';
import TitleContentListBlock from '../../../../components/original-text/ContentListBlock/byauthor/TitleContentListBlock';
import useAsync from '../../../../hooks/useAsync';
import SortBlock from '../../../../components/original-text/SortBlock/SortBlock';
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
      <DisplaySelectedListBlock />
      <MainContentBlock>
        <SortBlock open={true} />
        <ContentListBlock>
          {munche && <TitleContentListBlock />}
        </ContentListBlock>
      </MainContentBlock>
    </Layout>
  );
}

export default OriginalTextTitle;
