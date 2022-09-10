import axios from 'axios';
import React from 'react';

async function getGwonchaList(literature, consonant, authorname, bookname) {
  const response = axios({
    url: `/original-text/${literature}/byauthor/${consonant}/${authorname}/${bookname}`,
    method: 'get',
    data: {
      literature: literature,
      consonant: consonant,
      authorname: authorname,
      bookname: bookname,
    },
  });
  console.log('response 데이터: ', response);
  //return response -> github useAsync 참고
}

export default getGwonchaList;
