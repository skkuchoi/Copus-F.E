import axios from 'axios';
import React from 'react';

async function getSearchResult(searchCategory, keyword) {
  const response = axios({
    url: `http://ec2-52-78-232-56.ap-northeast-2.compute.amazonaws.com:8080/search-result/${searchCategory}/${keyword}`,
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
