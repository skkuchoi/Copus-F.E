import axios from 'axios';

async function getLeftSearchResult(filter, keyword) {
  const response = axios({
    url: '/category/total',
    method: 'get',
    params: {
      filter: filter,
      keyword: keyword,
    },
  });

  //console.log('response 데이터: ', response);
  return response;
}

export default getLeftSearchResult;
