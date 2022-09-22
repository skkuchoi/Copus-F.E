import axios from 'axios';

async function getRightSearchResult(filter, keyword) {
  const response = axios({
    url: '/article/preview',
    method: 'get',
    data: {
      filter: filter,
      keyword: keyword,
    },
  });
  //console.log('response 데이터: ', response);

  const totalDatas = {
    count: '2',
    datas: [
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaId: 'gwonchaId',
        gwonchaTitle: 'gwonchaTitle',
        muncheId: 'muncheId',
        muncheTitle: 'muncheTitle',
        finalId: 'finalId',
        finalTitle: 'finalTitle',
        contentPartition: 'contentPartition',
      },
    ],
  };

  const bookTitleDatas = {
    count: '2',
    datas: [
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaId: null,
        gwonchaTitle: null,
        muncheId: null,
        muncheTitle: null,
        finalId: null,
        finalTitle: null,
        contentPartition: null,
      },
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaId: null,
        gwonchaTitle: null,
        muncheId: null,
        muncheTitle: null,
        finalId: null,
        finalTitle: null,
        contentPartition: null,
      },
    ],
  };

  const gwonchaTitleDatas = {
    count: '2',
    datas: [
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaId: 'gwonchaId',
        gwonchaTitle: 'gwonchaTitle',
        muncheId: null,
        muncheTitle: null,
        finalId: null,
        finalTitle: null,
        contentPartition: null,
      },
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaId: 'gwonchaId',
        gwonchaTitle: 'gwonchaTitle',
        muncheId: null,
        muncheTitle: null,
        finalId: null,
        finalTitle: null,
        contentPartition: null,
      },
    ],
  };

  const contentDatas = {
    count: '2',
    datas: [
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaId: 'gwonchaId',
        gwonchaTitle: 'gwonchaTitle',
        muncheId: 'muncheId',
        muncheTitle: 'muncheTitle',
        finalId: 'finalId',
        finalTitle: 'finalTitle',
        contentPartition: 'contentPartition',
      },
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiiTitle',
        authorName: 'authorName',
        publishYear: 'publishYear',
        gwonchaId: 'gwonchaId',
        gwonchaTitle: 'gwonchaTitle',
        muncheId: 'muncheId',
        muncheTitle: 'muncheTitle',
        finalId: 'finalId',
        finalTitle: 'finalTitle',
        contentPartition: 'contentPartition',
      },
    ],
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

export default getRightSearchResult;
