import React from 'react';
import Layout from '../../components/shared/Layout';
import { useParams } from 'react-router-dom';

import SearchResultLayout from '../../components/searchResult/SearchResultLayout';

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

  return (
    <Layout>
      {/* 데이터 length를 합쳐 number에 보내기 */}
      <SearchResultLayout
        bookResultNum={bookResultNum}
        authorResultNum={authorResultNum}
        textResultNum={textResultNum}
      />
    </Layout>
  );
}

export default SearchResult;
