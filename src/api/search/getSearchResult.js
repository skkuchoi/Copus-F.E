import axios from 'axios';
import React from 'react';

async function getSearchResult(searchCategory, keyword) {
    const response = axios({
      url: `/search-result/${searchCategory}/${keyword}`,
      method: 'get',
      data: {
        searchCategory: searchCategory,
        keyword: keyword,
      },
    });
    console.log('response 데이터: ', response);
    //return response -> github useAsync 참고
  }

export default getSearchResult;
