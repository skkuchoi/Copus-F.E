import React, { useEffect } from 'react';
import Layout from '../../components/shared/Layout';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import DisplaySelectedListBlock from '../../components/searchResult/DisplayBlock/DisplaySelectedListBlock';
import MainContentBlock from '../../components/searchResult/MainContentBlock';
import SidebarBlock from '../../components/searchResult/SidebarBlock/SidebarBlock';
import ContentListBlock from '../../components/searchResult/ContentListBlock/ContentListBlock';
import ResultDataBlock from '../../components/searchResult/ContentListBlock/ResultDataBlock';

import useAsync from '../../hooks/useAsync';
import getSearchResult from '../../api/search/getSearchResult';

function SearchResult() {
  const { keyword, searchCategory } = useParams();
  // searchCategory가 바뀔때마다 호출
  const [state] = useAsync(
    () => getSearchResult(searchCategory, keyword),
    [searchCategory],
  );

  const bookResultNum = 12;
  const authorResultNum = 2;
  const textResultNum = 1;
  const totalResultNum = bookResultNum + authorResultNum + textResultNum;
  return (
    <Layout>
      {/* 데이터 length를 합쳐 number에 보내기 */}
      <DisplaySelectedListBlock number={totalResultNum} />
      <MainContentBlock>
        {/* data 보내주기 props로? */}
        <SidebarBlock
          bookResultNum={bookResultNum}
          authorResultNum={authorResultNum}
          textResultNum={textResultNum}
        />

        <ContentListBlock>
          {/* 여기에도 data보내기  */}
          <ResultDataBlock
            bookResultNum={bookResultNum}
            authorResultNum={authorResultNum}
            textResultNum={textResultNum}
          />
        </ContentListBlock>
      </MainContentBlock>
    </Layout>
  );
}

export default SearchResult;
