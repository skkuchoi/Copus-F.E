import React from 'react';
import Layout from '../../components/shared/Layout';
import { useLocation, useParams } from 'react-router-dom';
import SearchResultLayout from '../../components/searchResult/SearchResultLayout';
import useAsync from '../../hooks/useAsync';
import getRightSearchResult from '../../api/search/getRightSearchResult';
import getLeftSearchResult from '../../api/search/getLeftSearchResult';
//
function SearchResult() {
  //console.log(JSON.parse(JSON.stringify(leftDatas)));
  //console.log(JSON.parse(JSON.stringify(rightDatas)));
  return (
    <Layout>
      <SearchResultLayout />
    </Layout>
  );
}

export default SearchResult;
