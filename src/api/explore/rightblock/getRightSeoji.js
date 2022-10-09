import axios from 'axios';

function getRightSeoji(filter, seojiKeyword, consonant) {
  console.log('seojiKeyword:', seojiKeyword, 'keyword:', consonant);
  const response = axios({
    url: '/article/seoji',
    method: 'get',
    params: {
      seojiKeyword: seojiKeyword,
      keyword: consonant,
    },
  });
  // console.log('response', response);
  return response;
  
}

export default getRightSeoji;
