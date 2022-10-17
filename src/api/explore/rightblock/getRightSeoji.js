import axios from 'axios';

function getRightSeoji(filter, seojiKeyword, consonant) {
  const response = axios({
    url: '/article/seoji',
    method: 'get',
    params: {
      seojiKeyword: seojiKeyword,
      keyword: consonant,
    },
  });
  return response;
}

export default getRightSeoji;
