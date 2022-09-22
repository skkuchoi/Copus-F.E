import axios from 'axios';

async function getRightDepth1List( filter, currentId) {
  
  const response = axios({
    url: '/seoji',
    method: 'get',
    data: {
      keyword: currentId, // all || A,B,C
      
      currentId: currentId,
    },
  });
  const bookJsonDataA = {
    datas: [
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },{
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle-book',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
      
    ],
  };
  const bookJsonDataB = {
    datas: [
      {
        childId: '나childId1',
        childTitle: '나childTitleDepth2-1',
      },
      {
        childId: '나childId2',
        childTitle: '나childTitleDepth2-2',
      },
      {
        childId: '나childId3',
        childTitle: '나childTitleDepth2-3',
      },
      {
        childId: '나childId4',
        childTitle: '나childTitleDepth2-4',
      },
      {
        childId: '나childId5',
        childTitle: '나childTitleDepth2-5',
      },
      {
        childId: '나childId6',
        childTitle: '나childTitleDepth2-6',
      },
      {
        childId: '나childId7',
        childTitle: '나childTitleDepth2-7',
      },
      {
        childId: '나childId8',
        childTitle: '나childTitleDepth2-8',
      },
      {
        childId: '나childId9',
        childTitle: '나childTitleDepth2-9',
      },
      {
        childId: '나childId10',
        childTitle: '나childTitleDepth2-10',
      },
      {
        childId: '나childId11',
        childTitle: '나childTitleDepth2-11',
      },
      {
        childId: '나childId12',
        childTitle: '나childTitleDepth2-12',
      },
      {
        childId: '나childId13',
        childTitle: '나childTitleDepth2-13',
      },
      {
        childId: '나childId14',
        childTitle: '나childTitleDepth2-14',
      },
      {
        childId: '나childId15',
        childTitle: '나childTitleDepth2-15',
      },
      {
        childId: '나childId16',
        childTitle: '나childTitleDepth2-16',
      },
      {
        childId: '나childId17',
        childTitle: '나childTitleDepth2-17',
      },
      {
        childId: '나childId18',
        childTitle: '나childTitleDepth2-18',
      },
      {
        childId: '나childId19',
        childTitle: '나childTitleDepth2-19',
      },
      {
        childId: '나childId20',
        childTitle: '나childTitleDepth2-20',
      },
      {
        childId: '나childId21',
        childTitle: '나childTitleDepth2-21',
      },
    ],
  };
  const bookJsonDataAll = {
    datas: [
      {
        childId: '가childId1',
        childTitle: '가childTitleDepth2-1',
      },
      {
        childId: '가childId2',
        childTitle: '가childTitleDepth2-2',
      },
      {
        childId: '가childId3',
        childTitle: '가childTitleDepth2-3',
      },
      {
        childId: '가childId4',
        childTitle: '가childTitleDepth2-4',
      },
      {
        childId: '가childId5',
        childTitle: '가childTitleDepth2-5',
      },
      {
        childId: '가childId6',
        childTitle: '가childTitleDepth2-6',
      },
      {
        childId: '가childId7',
        childTitle: '가childTitleDepth2-7',
      },
      {
        childId: '가childId8',
        childTitle: '가childTitleDepth2-8',
      },
      {
        childId: '가childId9',
        childTitle: '가childTitleDepth2-9',
      },
      {
        childId: '가childId10',
        childTitle: '가childTitleDepth2-10',
      },
      {
        childId: '가childId11',
        childTitle: '가childTitleDepth2-11',
      },
      {
        childId: '가childId12',
        childTitle: '가childTitleDepth2-12',
      },
      {
        childId: '가childId13',
        childTitle: '가childTitleDepth2-13',
      },
      {
        childId: '가childId14',
        childTitle: '가childTitleDepth2-14',
      },
      {
        childId: '가childId15',
        childTitle: '가childTitleDepth2-15',
      },
      {
        childId: '가childId16',
        childTitle: '가childTitleDepth2-16',
      },
      {
        childId: '가childId17',
        childTitle: '가childTitleDepth2-17',
      },
      {
        childId: '가childId18',
        childTitle: '가childTitleDepth2-18',
      },
      {
        childId: '가childId19',
        childTitle: '가childTitleDepth2-19',
      },
      {
        childId: '가childId20',
        childTitle: '가childTitleDepth2-20',
      },
      {
        childId: '가childId21',
        childTitle: '가childTitleDepth2-21',
      },
      {
        childId: '나childId1',
        childTitle: '나childTitleDepth2-1',
      },
      {
        childId: '나childId2',
        childTitle: '나childTitleDepth2-2',
      },
      {
        childId: '나childId3',
        childTitle: '나childTitleDepth2-3',
      },
      {
        childId: '나childId4',
        childTitle: '나childTitleDepth2-4',
      },
      {
        childId: '나childId5',
        childTitle: '나childTitleDepth2-5',
      },
      {
        childId: '나childId6',
        childTitle: '나childTitleDepth2-6',
      },
      {
        childId: '나childId7',
        childTitle: '나childTitleDepth2-7',
      },
      {
        childId: '나childId8',
        childTitle: '나childTitleDepth2-8',
      },
      {
        childId: '나childId9',
        childTitle: '나childTitleDepth2-9',
      },
      {
        childId: '나childId10',
        childTitle: '나childTitleDepth2-10',
      },
      {
        childId: '나childId11',
        childTitle: '나childTitleDepth2-11',
      },
      {
        childId: '나childId12',
        childTitle: '나childTitleDepth2-12',
      },
      {
        childId: '나childId13',
        childTitle: '나childTitleDepth2-13',
      },
      {
        childId: '나childId14',
        childTitle: '나childTitleDepth2-14',
      },
      {
        childId: '나childId15',
        childTitle: '나childTitleDepth2-15',
      },
      {
        childId: '나childId16',
        childTitle: '나childTitleDepth2-16',
      },
      {
        childId: '나childId17',
        childTitle: '나childTitleDepth2-17',
      },
      {
        childId: '나childId18',
        childTitle: '나childTitleDepth2-18',
      },
      {
        childId: '나childId19',
        childTitle: '나childTitleDepth2-19',
      },
      {
        childId: '나childId20',
        childTitle: '나childTitleDepth2-20',
      },
      {
        childId: '나childId21',
        childTitle: '나childTitleDepth2-21',
      },
    ],
  };

  const authorJsonDataA = {
    datas: [
      {
        childId: '가childId-author-1',
        childTitle: '가childTitle-author-1',
      },
      {
        childId: '가childId-author-2',
        childTitle: '가childTitle-author-2',
      },
      {
        childId: '가childId-author-3',
        childTitle: '가childTitle-author-3',
      },
      {
        childId: '가childId-author-4',
        childTitle: '가childTitle-author-4',
      },
      {
        childId: '가childId-author-5',
        childTitle: '가childTitle-author-5',
      },
      {
        childId: '가childId-author-6',
        childTitle: '가childTitle-author-6',
      },
      {
        childId: '가childId-author-7',
        childTitle: '가childTitle-author-7',
      },
      {
        childId: '가childId-author-8',
        childTitle: '가childTitle-author-8',
      },
      {
        childId: '가childId-author-9',
        childTitle: '가childTitle-author-9',
      },
      {
        childId: '가childId-author-10',
        childTitle: '가childTitle-author-10',
      },
      {
        childId: '가childId-author-11',
        childTitle: '가childTitle-author-11',
      },
      {
        childId: '가childId-author-12',
        childTitle: '가childTitle-author-12',
      },
      {
        childId: '가childId-author-13',
        childTitle: '가childTitle-author-13',
      },
      {
        childId: '가childId-author-14',
        childTitle: '가childTitle-author-14',
      },
      {
        childId: '가childId-author-15',
        childTitle: '가childTitle-author-15',
      },
      {
        childId: '가childId-author-16',
        childTitle: '가childTitle-author-16',
      },
      {
        childId: '가childId-author-17',
        childTitle: '가childTitle-author-17',
      },
      {
        childId: '가childId-author-18',
        childTitle: '가childTitle-author-18',
      },
      {
        childId: '가childId-author-19',
        childTitle: '가childTitle-author-19',
      },
      {
        childId: '가childId-author-20',
        childTitle: '가childTitle-author-20',
      },
      {
        childId: '가childId-author-21',
        childTitle: '가childTitle-author-21',
      },
    ],
  };
  const authorJsonDataB = {
    datas: [
      {
        childId: '나childId-author-1',
        childTitle: '나childTitle-author-1',
      },
      {
        childId: '나childId-author-2',
        childTitle: '나childTitle-author-2',
      },
      {
        childId: '나childId-author-3',
        childTitle: '나childTitle-author-3',
      },
      {
        childId: '나childId-author-4',
        childTitle: '나childTitle-author-4',
      },
      {
        childId: '나childId-author-5',
        childTitle: '나childTitle-author-5',
      },
      {
        childId: '나childId-author-6',
        childTitle: '나childTitle-author-6',
      },
      {
        childId: '나childId-author-7',
        childTitle: '나childTitle-author-7',
      },
      {
        childId: '나childId-author-8',
        childTitle: '나childTitle-author-8',
      },
      {
        childId: '나childId-author-9',
        childTitle: '나childTitle-author-9',
      },
      {
        childId: '나childId-author-10',
        childTitle: '나childTitle-author-10',
      },
      {
        childId: '나childId-author-11',
        childTitle: '나childTitle-author-11',
      },
      {
        childId: '나childId-author-12',
        childTitle: '나childTitle-author-12',
      },
      {
        childId: '나childId-author-13',
        childTitle: '나childTitle-author-13',
      },
      {
        childId: '나childId-author-14',
        childTitle: '나childTitle-author-14',
      },
      {
        childId: '나childId-author-15',
        childTitle: '나childTitle-author-15',
      },
      {
        childId: '나childId-author-16',
        childTitle: '나childTitle-author-16',
      },
      {
        childId: '나childId-author-17',
        childTitle: '나childTitle-author-17',
      },
      {
        childId: '나childId-author-18',
        childTitle: '나childTitle-author-18',
      },
      {
        childId: '나childId-author-19',
        childTitle: '나childTitle-author-19',
      },
      {
        childId: '나childId-author-20',
        childTitle: '나childTitle-author-20',
      },
      {
        childId: '나childId-author-21',
        childTitle: '나childTitle-author-21',
      },
    ],
  };
  const authorJsonDataAll = {
    datas: [
      {
        childId: '가childId-author-1',
        childTitle: '가childTitle-author-1',
      },
      {
        childId: '가childId-author-2',
        childTitle: '가childTitle-author-2',
      },
      {
        childId: '가childId-author-3',
        childTitle: '가childTitle-author-3',
      },
      {
        childId: '가childId-author-4',
        childTitle: '가childTitle-author-4',
      },
      {
        childId: '가childId-author-5',
        childTitle: '가childTitle-author-5',
      },
      {
        childId: '가childId-author-6',
        childTitle: '가childTitle-author-6',
      },
      {
        childId: '가childId-author-7',
        childTitle: '가childTitle-author-7',
      },
      {
        childId: '가childId-author-8',
        childTitle: '가childTitle-author-8',
      },
      {
        childId: '가childId-author-9',
        childTitle: '가childTitle-author-9',
      },
      {
        childId: '가childId-author-10',
        childTitle: '가childTitle-author-10',
      },
      {
        childId: '가childId-author-11',
        childTitle: '가childTitle-author-11',
      },
      {
        childId: '가childId-author-12',
        childTitle: '가childTitle-author-12',
      },
      {
        childId: '가childId-author-13',
        childTitle: '가childTitle-author-13',
      },
      {
        childId: '가childId-author-14',
        childTitle: '가childTitle-author-14',
      },
      {
        childId: '가childId-author-15',
        childTitle: '가childTitle-author-15',
      },
      {
        childId: '가childId-author-16',
        childTitle: '가childTitle-author-16',
      },
      {
        childId: '가childId-author-17',
        childTitle: '가childTitle-author-17',
      },
      {
        childId: '가childId-author-18',
        childTitle: '가childTitle-author-18',
      },
      {
        childId: '가childId-author-19',
        childTitle: '가childTitle-author-19',
      },
      {
        childId: '가childId-author-20',
        childTitle: '가childTitle-author-20',
      },
      {
        childId: '가childId-author-21',
        childTitle: '가childTitle-author-21',
      },
      {
        childId: '나childId-author-1',
        childTitle: '나childTitle-author-1',
      },
      {
        childId: '나childId-author-2',
        childTitle: '나childTitle-author-2',
      },
      {
        childId: '나childId-author-3',
        childTitle: '나childTitle-author-3',
      },
      {
        childId: '나childId-author-4',
        childTitle: '나childTitle-author-4',
      },
      {
        childId: '나childId-author-5',
        childTitle: '나childTitle-author-5',
      },
      {
        childId: '나childId-author-6',
        childTitle: '나childTitle-author-6',
      },
      {
        childId: '나childId-author-7',
        childTitle: '나childTitle-author-7',
      },
      {
        childId: '나childId-author-8',
        childTitle: '나childTitle-author-8',
      },
      {
        childId: '나childId-author-9',
        childTitle: '나childTitle-author-9',
      },
      {
        childId: '나childId-author-10',
        childTitle: '나childTitle-author-10',
      },
      {
        childId: '나childId-author-11',
        childTitle: '나childTitle-author-11',
      },
      {
        childId: '나childId-author-12',
        childTitle: '나childTitle-author-12',
      },
      {
        childId: '나childId-author-13',
        childTitle: '나childTitle-author-13',
      },
      {
        childId: '나childId-author-14',
        childTitle: '나childTitle-author-14',
      },
      {
        childId: '나childId-author-15',
        childTitle: '나childTitle-author-15',
      },
      {
        childId: '나childId-author-16',
        childTitle: '나childTitle-author-16',
      },
      {
        childId: '나childId-author-17',
        childTitle: '나childTitle-author-17',
      },
      {
        childId: '나childId-author-18',
        childTitle: '나childTitle-author-18',
      },
      {
        childId: '나childId-author-19',
        childTitle: '나childTitle-author-19',
      },
      {
        childId: '나childId-author-20',
        childTitle: '나childTitle-author-20',
      },
      {
        childId: '나childId-author-21',
        childTitle: '나childTitle-author-21',
      },
    ],
  };

  const bookJsonParseDataA = JSON.parse(JSON.stringify(bookJsonDataA));
  const bookJsonParseDataB = JSON.parse(JSON.stringify(bookJsonDataB));
  const bookJsonParseDataAll = JSON.parse(JSON.stringify(bookJsonDataAll));

  const authorJsonParseDataA = JSON.parse(JSON.stringify(authorJsonDataA));
  const authorJsonParseDataB = JSON.parse(JSON.stringify(authorJsonDataB));
  const authorJsonParseDataAll = JSON.parse(JSON.stringify(authorJsonDataAll));

  switch (filter) {
    case 'book':
      if (currentId === 'A') return bookJsonParseDataA;
      else if (currentId === 'B') return bookJsonParseDataB;
      return bookJsonParseDataAll;
    case 'author':
      if (currentId === 'A') return authorJsonParseDataA;
      else if (currentId === 'B') return authorJsonParseDataB;
      return authorJsonParseDataAll;
    default:
      return;
  }
}

export default getRightDepth1List;
