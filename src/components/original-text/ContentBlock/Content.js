import React, { useContext } from 'react';
import styled from 'styled-components';
import getRightFinalContent from '../../../api/test/rightBlock/bybook/getRightFinalContent';
import useAsync from '../../../hooks/useAsync';
import { finalContext } from '../../shared/ContentLayout';

const ContentPositioner = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
`;

const ContentRoute = styled.div`
  display: flex;
  flex-direction: row;
`;

const RouteText = styled.h6`
  font-size: 16px;
  margin: 0;
  margin-bottom: 5px;
  ::before {
    content: '▶';
    margin-left: 5px;
    margin-right: 5px;
    font-size: 10px;
    position: relative;
    top: -2px;
  }
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  padding: 5px 10px;
  margin-bottom: 15px;
  background-color: rgba(197, 232, 207, 0.5);
`;

const Wonju = styled.div`
  margin-left: 7px;
  padding-top: 4px;
  font-size: 15px;
`;

const Page = styled.div`
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
`;

const CopyBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-bottom: 20px;
`;

const DciInformation = styled.div`
  color: grey;
  font-size: 11px;
`;

const CopyButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  width: fit-content;
  padding: 1px 5px;
  margin: 0px 3px;
  font-size: 9px;
  cursor: pointer;
`;

const ContentText = styled.div`
  margin-left: 10px;
  font-size: 20px;
  margin-bottom: 40px;
`;

const Origin = styled.div`
  padding: 5px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 12px;
`;

export default function Content() {
  const clickFinalContext = useContext(finalContext);

  const [finalDataJsonDatas] = useAsync(
    () => getRightFinalContent(clickFinalContext),
    [clickFinalContext],
  );

  const testTitle = '河東寮羲允<원주>載文</원주>過余書室。拈韻志喜。<원주>二首</원주>';

  

  const title = '上蘆沙先生';
  const wonju = '癸丑';
  const page = 'b137_261a';
  const dci = 'ITKC_MO_1237A_0010_010_0010_2020_B137_XML';
  const content =
    '湖天寒欲雪。陪坐獨春風。承訓方知悔。繙書枉用工。正心除外騖。觀理貴中通。曾傳尋門路。庶幾次第功。';
  if (finalDataJsonDatas.data === null || finalDataJsonDatas.data === undefined)
    return <div>zz</div>;
  return (
    <>
      <ContentRoute>
        <RouteText>{finalDataJsonDatas.data.seojiTitle}</RouteText>
        <RouteText>{finalDataJsonDatas.data.gwonchaTitle}</RouteText>
        <RouteText>{finalDataJsonDatas.data.muncheTitle}</RouteText>
      </ContentRoute>
      <ContentPositioner>
        <Title>{title}</Title>

        <SubTitle>
          {title}
          <Wonju>{wonju}</Wonju>
          <Page>{page}</Page>
        </SubTitle>

        <CopyBlock>
          <DciInformation>[DCI]{dci}</DciInformation>
          <CopyButton>DCI 복사</CopyButton>
          <CopyButton>URL 복사</CopyButton>
        </CopyBlock>

        <ContentText>{content}</ContentText>
        <Origin> ⓒ 한국고전번역원 | 영인표점 한국문집총간 | 2010</Origin>
      </ContentPositioner>
    </>
  );
}
