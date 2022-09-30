import axios from 'axios';

function getSeoji(depth, currentId) {
  console.log(currentId);
  const response = axios({
    url: `/book/${depth}/${currentId}/`,
    method: 'get',
  });
  const seojiDatas1 = {
    datas: [
      {
        childId: '가암유고',
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
  const seojiDatas2 = {
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

  const seojiAllDatas = {
    datas: [
      {
        childId: '가암유고',
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
  if (currentId === 'A') return JSON.parse(JSON.stringify(seojiDatas1));
  else if (currentId === 'B') return JSON.parse(JSON.stringify(seojiDatas2));
  else if (currentId === 'All')
    return JSON.parse(JSON.stringify(seojiAllDatas));
}

export default getSeoji;
