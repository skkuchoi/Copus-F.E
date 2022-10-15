import React, { useContext } from 'react';
import styled from 'styled-components';

import useAsync from '../../../../hooks/useAsync';
import getRightFinalContent from '../../../../api/explore/rightblock/getRightFinalContent';

import { finalContext } from '../../../shared/ContentLayout';

import parseContent from '../../../../utils/parseContent';
import parseTitle from '../../../../utils/parseTitle';
import Loading from '../../../shared/Loading';
import parseGwoncha from '../../../../utils/parseGwoncha';
import parseMunche from '../../../../utils/parseMunche';

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
  background-color: rgba(197, 232, 207, 0.5);
`;

const FinalTitle = styled.span`
  margin: 0;
`;
const FinalWonju = styled.span`
  font-size: 17px;
  margin: 0;
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
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const ParagraphTitlePositioner = styled.div`
  margin-left: 10px;
`;

const ParagraphTitle = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const ParagraphContentPositioner = styled.div`
  margin-left: 10px;
`;

const ParagraphContent = styled.span`
  margin-left: ${(props) => (props.marginLeft === '3' ? ' 20px' : '0px')};
  font-size: 17px;
`;

const ParagraphWonju = styled.span`
  font-size: 12px;
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

  //console.log('final content: ', finalDataJsonDatas);
  const dci = 'ITKC_MO_1237A_0010_010_0010_2020_B137_XML';
  const handleCopyButton = () => {
    if (finalDataJsonDatas.data !== null)
      window.navigator.clipboard
        .writeText(finalDataJsonDatas.data.finalData.dci)
        .then(() => {
          alert('복사 완료');
        });
  };

  if (finalDataJsonDatas.data === null || finalDataJsonDatas.data === undefined)
    return <Loading />;
  return (
    <>
      <ContentRoute>
        <RouteText>{finalDataJsonDatas.data.seojiTitle}</RouteText>
        <RouteText>
          {parseGwoncha(finalDataJsonDatas.data.gwonchaTitle)}
        </RouteText>
        <RouteText>
          {parseMunche(finalDataJsonDatas.data.muncheTitle)}
        </RouteText>
      </ContentRoute>
      <ContentPositioner>
        <Title>
          {parseTitle(finalDataJsonDatas.data.finalData.title).map((el) => (
            <FinalTitle>
              &nbsp; {el.title}&nbsp;<FinalWonju>{el.wonju}</FinalWonju>
            </FinalTitle>
          ))}
        </Title>

        <CopyBlock>
          <DciInformation>[DCI]{dci}</DciInformation>
          <CopyButton onClick={handleCopyButton}>DCI 복사</CopyButton>
        </CopyBlock>

        <ContentText>
          {parseContent(
            finalDataJsonDatas.data.finalData.content,
            finalDataJsonDatas.data.finalData.annotation,
          ).map((item) => (
            <>
              {item.contents && (
                <ParagraphContentPositioner>
                  {item.contents.map((content) => (
                    <ParagraphContent
                      marginLeft={item.indent}
                      key={content.content}>
                      {content.content}
                      {content.wonju && (
                        <ParagraphWonju> {content.wonju} </ParagraphWonju>
                      )}
                    </ParagraphContent>
                  ))}
                </ParagraphContentPositioner>
              )}

              {item.titles && (
                <ParagraphTitlePositioner>
                  {item.titles.map((title) => (
                    <ParagraphTitle key={title.title}>
                      {title.title}
                      <ParagraphWonju> {title.wonju} </ParagraphWonju>
                    </ParagraphTitle>
                  ))}
                </ParagraphTitlePositioner>
              )}
            </>
          ))}
        </ContentText>
        <Origin> ⓒ 한국고전번역원 | 영인표점 한국문집총간 | 2010</Origin>
      </ContentPositioner>
    </>
  );
}
