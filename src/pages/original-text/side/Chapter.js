import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import getChapter from '../../../api/explore/bugaInformation/getChapter';
import SideTopBarBlock from '../../../components/basic/TopBarBlock/TopBarBlock';
import useAsync from '../../../hooks/useAsync';
import parseChapter from '../../../utils/parseChapter';

const TitlePositioner = styled.div`
  background-color: yellow;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const ChapterPositioner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChapterTitle = styled.p`
  background-color: #f3f3f3;
`;

const ChapterText = styled.p``;

const ChapterWonju = styled.span`
  font-size: 12px;
`;
function Chapter() {
  const { pathname } = useLocation();
  const lv1Id = pathname.split('/')[2].toString();

  const [chapterJsonDatas] = useAsync(() => getChapter(lv1Id), []);
  //console.log(chapterJsonDatas);
  if (chapterJsonDatas.data === null || chapterJsonDatas.data === undefined)
    return <div>로딩</div>;
  return (
    <>
      <SideTopBarBlock />

      <TitlePositioner>
        <Title>{chapterJsonDatas.data.seojiTitle}</Title>
      </TitlePositioner>
      <ChapterPositioner>
        <ChapterText>
          {parseChapter(chapterJsonDatas.data.chapter).gwoncha.map(
            (gwoncha) => (
              <>
                <ChapterTitle>
                  {gwoncha.gwoncha_content} {gwoncha.gwoncha_page}
                </ChapterTitle>
                {gwoncha.munche.map((muncheItem) => (
                  <>
                    <ChapterTitle>
                      {muncheItem.munche_content} {muncheItem.munche_page}
                    </ChapterTitle>
                    {muncheItem.final.map((finalItem) => (
                      <ChapterText>
                        {finalItem.final_content.map((contentItem) => (
                          <>
                            {contentItem.split('*')[0]}
                            <ChapterWonju>
                              &nbsp; {contentItem.split('*')[1]} &nbsp;
                            </ChapterWonju>
                          </>
                        ))}
                      </ChapterText>
                    ))}
                  </>
                ))}
              </>
            ),
          )}
        </ChapterText>
      </ChapterPositioner>
    </>
  );
}

export default Chapter;
