import React from 'react';
import { useParams } from 'react-router-dom';
import ContentLayout from '../../../components/shared/ContentLayout';
import BookTableRowBlock from '../../../components/original-text/ContentListBlock/BookTableRowBlock';
import GwonchaContentListBlock from '../../../components/original-text/ContentListBlock/bybook/GwonchaContentListBlock';

import useAsync from '../../../hooks/useAsync';
import getBookList from '../../../api/Explore/bybook/getBookList';
import Layout from '../../../components/shared/Layout';
import Content from '../../../components/original-text/ContentBlock/Content';

function Final() {
  const { literature, consonant } = useParams();

  // consonant 바뀔때마다 호출
  const [state] = useAsync(
    () => getBookList(literature, consonant),
    [consonant],
  );

  const rightDatas = {
    seojiId: 'seojiId',
    seojiTitle: 'seojiTitle',
    gwonchaId: 'gwonchaId',
    gwonchaTitle: 'gwonchaTitle',
    muncheId: 'muncheId',
    muncheTitle: 'muncheTitle',
    final: {
      title: '上蘆沙先生',
      content: 'content',
    },
  };
  const realDatas = JSON.parse(JSON.stringify(rightDatas));
  const title = '원주를 잘 만진 타이틀';
  const listSequence = [
    realDatas.seojiTitle,
    realDatas.gwonchaTitle,
    realDatas.muncheTitle,
    title,
  ].join(' > ');

  return (
    <Layout>
      <ContentLayout title={listSequence}>
        <Content
          title="上蘆沙先生"
          wonju="癸丑"
          page="b137_261a"
          dci="ITKC_MO_1237A_0010_010_0010_2020_B137_XML"
          content="湖天寒欲雪。陪坐獨春風。承訓方知悔。繙書枉用工。正心除外騖。觀理貴中通。曾傳尋門路。庶幾次第功。"
        />
      </ContentLayout>
    </Layout>
  );
}

export default Final;
