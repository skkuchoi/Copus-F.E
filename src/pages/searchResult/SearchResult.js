import React from 'react';
import Layout from '../../components/shared/Layout';
import { useLocation, useParams } from 'react-router-dom';
import SearchResultLayout from '../../components/searchResult/SearchResultLayout';
import useAsync from '../../hooks/useAsync';
import getRightSearchResult from '../../api/search/getRightSearchResult';
import getLeftSearchResult from '../../api/search/getLeftSearchResult';
// search-result/total/:keyword
function SearchResult() {
  const { keyword } = useParams();
  const { pathname } = useLocation();
  const searchFilter = pathname.split('/')[2];
  const filterUri = {
    total: 'total',
    'book-title': 'bookTitle',
    'author-name': 'authorName',
    content: 'content',
  };
  const filter = filterUri[searchFilter];

  //Left: searchFilter가 바뀔때마다 호출
  //Right: Left에 따라 자동
  const [leftState] = useAsync(
    () => getLeftSearchResult(filter, keyword),
    [filter],
  );

  const [rightState] = useAsync(
    () => getRightSearchResult(filter, keyword),
    [filter],
  );

  const leftDatas = {
    totalCount: '4',
    bookTitleCount: '2',
    authorNameCount: '1',
    contentCount: '1',
  };
  const rightDatas = {
    count: '2',
    datas: [
      {
        seojiId: 'seojiId',
        finalId: 'finalId',
        seojiTitle: 'seojiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaTitle: 'gwonchaTitle',
        muncheTitle: 'mucheTitle',
        contentPartition: 'contentPartition',
      },
      {
        seojiId: 'seojiId',
        finalId: 'finalId',
        seojiTitle: 'seojiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaTitle: 'gwonchaTitle',
        muncheTitle: 'muncheTitle',
        contentPartition: 'contentPartition',
      },
    ],
  };
  //console.log(JSON.parse(JSON.stringify(leftDatas)));
  //console.log(JSON.parse(JSON.stringify(rightDatas)));
  return (
    <Layout>
      <SearchResultLayout
        leftDatas={JSON.parse(JSON.stringify(leftDatas))}
        rightDatas={JSON.parse(JSON.stringify(rightDatas))}
      />
    </Layout>
  );
}

export default SearchResult;
