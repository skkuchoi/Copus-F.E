import axios from 'axios';

function getRightSeoji(consonant) {
  const response = axios({
    url: '/seoji',
    method: 'get',
    data: {
      keyword: 'all',
      ordering: 'none',
    },
  });

  const rightSeojiDatasA = {
    count: '2',
    datas: [
      {
        seojiId: '가암유고',
        seojiTitle: '가암유고',
        authorName: '저자명',
        zipsuStart: '속23집',
        zipsuEnd: '속23집',
        publishYear: '1929',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
      {
        seojiId: '가주집',
        seojiTitle: '가주집',
        authorName: '저자명',
        zipsuStart: '속23집',
        zipsuEnd: '속23집',
        publishYear: '1234',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
    ],
  };

  const rightSeojiDatasB = {
    count: '2',
    datas: [
      {
        seojiId: '나암유고',
        seojiTitle: '나암유고',
        authorName: '저자명',
        zipsuStart: '속23집',
        zipsuEnd: '속23집',
        publishYear: '1929',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
      {
        seojiId: '나주집',
        seojiTitle: '나주집',
        authorName: '저자명',
        zipsuStart: '속23집',
        zipsuEnd: '속23집',
        publishYear: '1234',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
    ],
  };

  if (consonant === 'A') return JSON.parse(JSON.stringify(rightSeojiDatasA));
  else if (consonant === 'B') return JSON.parse(JSON.stringify(rightSeojiDatasB));
  else return JSON.parse(JSON.stringify(rightSeojiDatasA));
}

export default getRightSeoji;
