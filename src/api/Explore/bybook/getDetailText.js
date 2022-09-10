import axios from 'axios';
import React from 'react';

async function getDetailText(
  literature,
  consonant,
  bookname,
  gwoncha,
  munche,
  title,
) {
  const response = axios({
    url: `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/${munche}/${title}`,
    method: 'get',
    data: {
      literature: literature,
      consonant: consonant,
      bookname: bookname,
      gwoncha: gwoncha,
      munche: munche,
      title: title,
    },
  });
  console.log('response 데이터: ', response);
  //return response -> github useAsync 참고
}

export default getDetailText;
