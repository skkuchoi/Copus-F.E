import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../../components/shared/Layout';
import DisplaySelectedListBlock from '../../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';
import MainContentBlock from '../../../../components/original-text/MainContentBlock';
import ContentListBlock from '../../../../components/original-text/ContentListBlock/ContentListBlock';
import GwonchaContentListBlock from '../../../../components/original-text/ContentListBlock/byauthor/GwonchaContentListBlock';
import SortBlock from '../../../../components/original-text/SortBlock/SortBlock';
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
      <DisplaySelectedListBlock />
      <MainContentBlock>
        <SortBlock open={true} />

        <ContentListBlock>
          {bookname && <GwonchaContentListBlock />}
        </ContentListBlock>
      </MainContentBlock>
    </Layout>
  );
}

export default OriginalTextGwoncha;
