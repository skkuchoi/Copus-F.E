import axios from 'axios';

async function getRightSearchResult(filter, totalDetailFilter, keyword) {
  const settingFilter = filter !== 'total' ? filter : totalDetailFilter;
  console.log('settingfilter: ', settingFilter, 'keyword:', keyword);
  const response = axios({
    url: '/article/preview',
    method: 'get',
    params: {
      filter: settingFilter,
      keyword: keyword,
    },
  });
  console.log('response 데이터: ', response);
  return response;
}

export default getRightSearchResult;
