import axios from 'axios';
import React from 'react';

async function getTitleList(
  literature,
  consonant,
  authorname,
  bookname,
  gwoncha,
  munche,
) {
  const response = axios({
    url: `/original-text/${literature}/byauthor/${consonant}/${authorname}/${bookname}/${gwoncha}/${munche}`,
    method: 'get',
    data: {
      literature: literature,
      consonant: consonant,
      bookname: bookname,
      gwoncha: gwoncha,
      munche: munche,
    },
  });
  console.log('response 데이터: ', response);
  //return response -> github useAsync 참고
}

export default getTitleList;
