import axios from 'axios';

async function getRightSearchResult(filter, keyword) {
  const response = axios({
    url: '/article/preview',
    method: 'get',
    params: {
      filter: filter,
      keyword: keyword,
    },
  });
  //console.log('response 데이터: ', response);
  return response;
}

export default getRightSearchResult;
