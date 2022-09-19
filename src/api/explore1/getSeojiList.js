import axios from 'axios';

async function getSeojiList(keyword, ordering) {
  console.log(keyword, ordering);
  const response = axios({
    url: '/article/preview',
    method: 'get',
    data: {
      keyword: keyword,
      ordering: ordering,
    },
  });
  //console.log('response 데이터: ', response);
}

export default getSeojiList;
