import axios from 'axios';
import React from 'react';

async function getBookList(literature, consonant) {
  const response = axios({
    url: `/original-text/${literature}/byauthor/${consonant}`,
    method: 'get',
    data: {
      literature: literature,
      consonant: consonant,
    },
  });
  console.log('response 데이터: ', response);
  //return response -> github useAsync 참고
}

export default getBookList;
