import axios from 'axios';
import React from 'react';

async function getMuncheList(literature, consonant, bookname, gwoncha) {
  const response = axios({
    url: `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}`,
    method: 'get',
    data: {
      literature: literature,
      consonant: consonant,
      bookname: bookname,
      gwoncha: gwoncha,
    },
  });
  console.log('response 데이터: ', response);
  //return response -> github useAsync 참고
}

export default getMuncheList;
