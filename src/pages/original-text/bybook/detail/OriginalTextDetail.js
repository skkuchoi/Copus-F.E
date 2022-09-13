import React from 'react';
import styled from 'styled-components';
import Layout from '../../../../components/shared/Layout';
import DisplaySelectedListBlock from '../../../../components/original-text/DisplayBlock/DisplaySelectedListBlock';

import Content from '../../../../components/original-text/ContentBlock/Content';

import TitleContentListBlock from '../../../../components/original-text/ContentListBlock/bybook/TitleContentListBlock';
import SortBlock from '../../../../components/original-text/SortBlock/SortBlock';

import { useParams } from 'react-router-dom';
import useAsync from '../../../../hooks/useAsync';
import getDetailText from '../../../../api/Explore/bybook/getDetailText';

import ContentListTitleBlock from '../../../../components/original-text/ContentListBlock/ContentListTitleBlock';

const MainContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  margin: 12px 20px;
`;

const ContainerPositioner = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const ListPositioner = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentPositioner = styled.div`
  position: relative;
  top: -40px;
`;

function OriginalTextDetail() {
  const { literature, consonant, bookname, gwoncha, munche, title } =
    useParams();

  // title 바뀔때마다 호출
  const [state] = useAsync(
    () =>
      getDetailText(literature, consonant, bookname, gwoncha, munche, title),
    [title],
  );
  const linkToGwonchaList = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;
  // content.js 에 전달하려면
  // < > < > 가 마구마구 섞인 애들을 잘 파싱해서
  // 아래처럼 예쁜 props로 보내주면 좋을 것 같다.
  return (
    <Layout>
      <DisplaySelectedListBlock />
      <SortBlock open={true} />
      <MainContentBlock>
        <ContentListTitleBlock title={bookname} link={linkToGwonchaList} />
        <ContainerPositioner>
          <ListPositioner>
            <TitleContentListBlock />
          </ListPositioner>

          <ContentPositioner>
            <Content
              title="上蘆沙先生"
              wonju="癸丑"
              page="b137_261a"
              dci="ITKC_MO_1237A_0010_010_0010_2020_B137_XML"
              content="湖天寒欲雪。陪坐獨春風。承訓方知悔。繙書枉用工。正心除外騖。觀理貴中通。曾傳尋門路。庶幾次第功。"
            />
          </ContentPositioner>
        </ContainerPositioner>
      </MainContentBlock>
    </Layout>
  );
}

export default OriginalTextDetail;
