import axios from 'axios';
import React from 'react';

async function getMuncheList(
  literature,
  consonant,
  authorname,
  bookname,
  gwoncha,
) {
  const response = axios({
    url: `/original-text/${literature}/byauthor/${consonant}/${authorname}/${bookname}/${gwoncha}`,
    method: 'get',
    data: {
      literature: literature,
      consonant: consonant,
      authorname: authorname,
      bookname: bookname,
      gwoncha: gwoncha,
    },
  });
  console.log('response 데이터: ', response);
  //return response -> github useAsync 참고
}

export default getMuncheList;
