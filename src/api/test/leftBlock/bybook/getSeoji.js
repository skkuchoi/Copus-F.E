import axios from 'axios';

function getSeoji(filter, depth, currentId) {
  //console.log('getSeoji: ', filter, depth, currentId);
  const response = axios({
    url: `/${filter}/${depth}/${currentId}/`,
    method: 'get',
  });
  const bybook1 = {
    datas: [
      {
        childId: 'ITKC_MO_1116A',
        childTitle: '가암유고',
      },
      {
        childId: '가오고략(嘉梧藁略)',
        childTitle: '가오고략(嘉梧藁略)',
      },
      {
        childId: '가정유고(柯汀遺稿)',
        childTitle: '가정유고(柯汀遺稿)',
      },
      {
        childId: '가정집(稼亭集)',
        childTitle: '가정집(稼亭集)',
      },
      {
        childId: '가주집(家州集)',
        childTitle: '가주집(家州集)',
      },
      {
        childId: '가암유고(可庵遺稿)',
        childTitle: '가암유고(可庵遺稿)',
      },
      {
        childId: '가오고략(嘉梧藁略)',
        childTitle: '가오고략(嘉梧藁略)',
      },
      {
        childId: '가정유고(柯汀遺稿)',
        childTitle: '가정유고(柯汀遺稿)',
      },
      {
        childId: '가정집(稼亭集)',
        childTitle: '가정집(稼亭集)',
      },
      {
        childId: '가주집',
        childTitle: '가주집',
      },
      {
        childId: '가암유고(可庵遺稿)',
        childTitle: '가암유고(可庵遺稿)',
      },
      {
        childId: '가오고략(嘉梧藁略)',
        childTitle: '가오고략(嘉梧藁略)',
      },
      {
        childId: '가정유고(柯汀遺稿)',
        childTitle: '가정유고(柯汀遺稿)',
      },
      {
        childId: '가정집(稼亭集)',
        childTitle: '가정집(稼亭集)',
      },
      {
        childId: '가주집(家州集)',
        childTitle: '가주집(家州集)',
      },
    ],
  };
  const bybook2 = {
    datas: [
      {
        childId: '나암유고1',
        childTitle: '나암유고1',
      },
      {
        childId: '나암유고2',
        childTitle: '나암유고2',
      },
      {
        childId: '나암유고3',
        childTitle: '나암유고3',
      },
      {
        childId: '나암유고4',
        childTitle: '나암유고4',
      },
      {
        childId: '나암유고5',
        childTitle: '나암유고5',
      },
    ],
  };

  const bybookAll = {
    datas: [
      {
        childId: 'ITKC_MO_1116A',
        childTitle: '가암유고',
      },
      {
        childId: '가오고략(嘉梧藁略)',
        childTitle: '가오고략(嘉梧藁略)',
      },
      {
        childId: '가정유고(柯汀遺稿)',
        childTitle: '가정유고(柯汀遺稿)',
      },
      {
        childId: '가정집(稼亭集)',
        childTitle: '가정집(稼亭集)',
      },
      {
        childId: '가주집(家州集)',
        childTitle: '가주집(家州集)',
      },
      {
        childId: '가암유고(可庵遺稿)',
        childTitle: '가암유고(可庵遺稿)',
      },
      {
        childId: '가오고략(嘉梧藁略)',
        childTitle: '가오고략(嘉梧藁略)',
      },
      {
        childId: '가정유고(柯汀遺稿)',
        childTitle: '가정유고(柯汀遺稿)',
      },
      {
        childId: '가정집(稼亭集)',
        childTitle: '가정집(稼亭集)',
      },
      {
        childId: '가주집',
        childTitle: '가주집',
      },
      {
        childId: '가암유고(可庵遺稿)',
        childTitle: '가암유고(可庵遺稿)',
      },
      {
        childId: '가오고략(嘉梧藁略)',
        childTitle: '가오고략(嘉梧藁略)',
      },
      {
        childId: '가정유고(柯汀遺稿)',
        childTitle: '가정유고(柯汀遺稿)',
      },
      {
        childId: '가정집(稼亭集)',
        childTitle: '가정집(稼亭集)',
      },
      {
        childId: '가주집(家州集)',
        childTitle: '가주집(家州集)',
      },
      {
        childId: '나암유고1',
        childTitle: '나암유고1',
      },
      {
        childId: '나암유고2',
        childTitle: '나암유고2',
      },
      {
        childId: '나암유고3',
        childTitle: '나암유고3',
      },
      {
        childId: '나암유고4',
        childTitle: '나암유고4',
      },
      {
        childId: '나암유고5',
        childTitle: '나암유고5',
      },
    ],
  };

  const byauthor1 = {
    datas: [
      {
        childId: 'ITKC_MO_1036A',
        childTitle: '비수재집',
      },
    ],
  };

  const byauthor2 = {
    datas: [
      {
        childId: 'ITKC_MO_0827A',
        childTitle: '한사집',
      },
    ],
  };

  switch (filter) {
    case 'book':
      if (currentId === 'A') {
        return JSON.parse(JSON.stringify(bybook1));
      } else if (currentId === 'B') {
        return JSON.parse(JSON.stringify(bybook2));
      } else if (currentId === 'all') {
        return JSON.parse(JSON.stringify(bybookAll));
      }
      break;
    case 'author':
      if (currentId === '강규환') {
        return JSON.parse(JSON.stringify(byauthor1));
      } else if (currentId === '나규환') {
        return JSON.parse(JSON.stringify(byauthor2));
      } else return JSON.parse(JSON.stringify({ datas: [] }));

    default:
      break;
  }
}

export default getSeoji;
