import React, { useEffect } from 'react';
import styled from 'styled-components';
import ResultDataBlock from './ResultDataBlock/ResultDataBlock';
import DisplaySelectedListBlock from './DisplayBlock/DisplaySelectedListBlock';
import SidebarBlock from './SidebarBlock/SidebarBlock';
import { useLocation, useParams } from 'react-router-dom';
import useAsync from '../../hooks/useAsync';
import getLeftSearchResult from '../../api/search/getLeftSearchResult';

const MainContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
`;

const ContentPositioner = styled.div`
  width: 85%;
  padding: 7px 10px;
  display: flex;
  flex-direction: column;
`;

function SearchResultLayout() {
  const { keyword } = useParams();
  const { pathname } = useLocation();

  let filter;

  const filterUri = {
    total: 'total',
    'book-title': 'bookTitle',
    'author-name': 'authorName',
    'gwoncha-title': 'gwonchaTitle',
    'munche-title': 'muncheTitle',
    content: 'content',
    'data-id': 'dataId',
  };

  useEffect(() => {
    filter = filterUri[pathname.split('/')[2]];
  }, [pathname]);

  const [leftDatas] = useAsync(
    () => getLeftSearchResult(filter, keyword),
    [filter],
  );

  // 로딩 페이지
  if (leftDatas.data === null) return <div>zz</div>;
  return (
    <>
      <DisplaySelectedListBlock totalCount={leftDatas.data.totalCount} />
      <MainContentBlock>
        <SidebarBlock leftDatas={leftDatas.data} />
        <ContentPositioner>
          <ResultDataBlock />
        </ContentPositioner>
      </MainContentBlock>
    </>
  );
}

export default SearchResultLayout;
