import axios from 'axios';

async function getLeftSearchResult(filter, keyword) {
  const response = axios({
    url: '/category/total',
    method: 'get',
    data: {
      filter: filter,
      keyword: keyword,
    },
  });

  //console.log('response 데이터: ', response);

  const totalDatas = {
    totalCount: '6',
    bookTitleCount: '2',
    authorNameCount: '0',
    gwonchaTitleCount: '2',
    muncheTitleCount: '0',
    contentCount: '2',
    dataIdCount: '0',
  };
  const bookTitleDatas = {
    totalCount: '2',
    bookTitleCount: '2',
    authorNameCount: '0',
    gwonchaTitleCount: '0',
    muncheTitleCount: '0',
    contentCount: '0',
    dataIdCount: '0',
  };
  const gwonchaTitleDatas = {
    totalCount: '2',
    bookTitleCount: '0',
    authorNameCount: '0',
    gwonchaTitleCount: '2',
    muncheTitleCount: '0',
    contentCount: '0',
    dataIdCount: '0',
  };
  const contentDatas = {
    totalCount: '2',
    bookTitleCount: '0',
    authorNameCount: '0',
    gwonchaTitleCount: '0',
    muncheTitleCount: '0',
    contentCount: '2',
    dataIdCount: '0',
  };

  if (filter === 'total') return JSON.parse(JSON.stringify(totalDatas));
  else if (filter === 'bookTitle')
    return JSON.parse(JSON.stringify(bookTitleDatas));
  else if (filter === 'gwonchaTitle')
    return JSON.parse(JSON.stringify(gwonchaTitleDatas));
  else if (filter === 'content')
    return JSON.parse(JSON.stringify(contentDatas));
  else return JSON.parse(JSON.stringify(bookTitleDatas));
}

export default getLeftSearchResult;
