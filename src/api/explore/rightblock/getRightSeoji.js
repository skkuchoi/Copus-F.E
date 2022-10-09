import axios from 'axios';

function getRightSeoji(filter, seojiKeyword, consonant) {
  console.log('seojiKeyword:', seojiKeyword, 'keyword:', consonant);
  const response = axios({
    url: '/article/seoji',
    method: 'get',
    params: {
      seojiKeyword: seojiKeyword,
      keyword: consonant,
    },
  });

  console.log('response', response);


  return response;
  const bybook1 = {
    count: '2',
    datas: [
      {
        seojiId: 'ITKC_MO_1116A',
        seojiTitle: '가암유고',
        authorName: '저자명',

        zipsu: '속98집',
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

        zipsu: '속98집',
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

  const bybook2 = {
    count: '2',
    datas: [
      {
        seojiId: '나암유고',
        seojiTitle: '나암유고',
        authorName: '저자명',

        zipsu: '속98집',
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

        zipsu: '속98집',
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

  const byauthor1 = {
    count: '1',
    datas: [
      {
        seojiId: 'ITKC_MO_1036A',
        seojiTitle: '비수재집',
        authorName: '강규환',

        zipsu: '속98집',
        publishYear: '1929',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
    ],
  };

  const byauthor2 = {
    count: '1',
    datas: [
      {
        seojiId: 'ITKC_MO_0827A',
        seojiTitle: '한사집',
        authorName: '나대수',

        zipsu: '속98집',
        publishYear: '1929',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
    ],
  };

  const byauthorAll = {
    count: '1',
    datas: [
      {
        seojiId: 'ITKC_MO_1036A',
        seojiTitle: '비수재집',
        authorName: '강규환',

        zipsu: '속98집',
        publishYear: '1929',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
      {
        seojiId: 'ITKC_MO_0827A',
        seojiTitle: '한사집',
        authorName: '강대수',

        zipsu: '속98집',
        publishYear: '1929',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
    ],
  };

  // switch (filter) {
  //   case 'book':
  //     if (consonant === 'A') return JSON.parse(JSON.stringify(bybook1));
  //     else if (consonant === 'B') return JSON.parse(JSON.stringify(bybook2));
  //     else if (consonant === 'all') return JSON.parse(JSON.stringify(bybook1));
  //     break;
  //   case 'author':
  //     if (seojiKeyword === 'authorName')
  //       return JSON.parse(JSON.stringify(byauthor1));
  //     else if (consonant === 'A') return JSON.parse(JSON.stringify(byauthor1));
  //     else if (consonant === 'B') return JSON.parse(JSON.stringify(byauthor2));
  //     else if (consonant === 'all')
  //       return JSON.parse(JSON.stringify(byauthorAll));
  //     break;
  //   default:
  //     return;
  // }
}

export default getRightSeoji;
