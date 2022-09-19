import axios from 'axios';

async function getLeftSearchResult(filter, keyword) {
  const response = axios({
    url: '/category/total',
    method: 'get',
    data: {
      filter: filter,
      keyword: keyword,
    },
  });
  //console.log('response 데이터: ', response);
   
}

export default getLeftSearchResult;
