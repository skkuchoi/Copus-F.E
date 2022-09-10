import axios from 'axios';
import React from 'react';

async function getGwonchaList(literature, consonant, bookname) {
  const response = axios({
    url: `/original-text/${literature}/bybook/${consonant}/${bookname}`,
    method: 'get',
    data: {
      literature: literature,
      consonant: consonant,
      bookname: bookname,
    },
  });
  console.log('response 데이터: ', response);
  //return response -> github useAsync 참고
}

export default getGwonchaList;
