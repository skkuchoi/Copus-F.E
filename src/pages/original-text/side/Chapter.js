import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import getChapter from '../../../api/explore/bugaInformation/getChapter';
import SideTopBarBlock from '../../../components/basic/TopBarBlock/TopBarBlock';
import useAsync from '../../../hooks/useAsync';

const TitlePositioner = styled.div`
  background-color: yellow;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const ChapterPositioner = styled.div``;

const ChapterText = styled.p``;

function Chapter() {
  const { pathname } = useLocation();
  const lv1Id = pathname.split('/')[2].toString();

  const [chapterJsonDatas] = useAsync(() => getChapter(lv1Id), []);
  //console.log(chapterJsonDatas);
  //if (chapterJsonDatas.data === null) return <div>로딩</div>;
  return (
    <>
      <SideTopBarBlock />

      <TitlePositioner>
        <Title>챕터(월고집)</Title>
      </TitlePositioner>
      <ChapterPositioner>
        <ChapterText>챕터</ChapterText>
      </ChapterPositioner>
    </>
  );
}

export default Chapter;
