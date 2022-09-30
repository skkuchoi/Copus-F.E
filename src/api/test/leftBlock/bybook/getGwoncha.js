import axios from 'axios';

function getGwoncha(depth, currentId) {
  
  const response = axios({
    url: `/book/${depth}/${currentId}/`,
    method: 'get',
  });
  const gwonchaDatas1 = {
    datas: [
      { childId: '가암유고-可庵遺稿卷之一', childTitle: '可庵遺稿卷之一' },
      { childId: '가암유고-可庵遺稿卷之二', childTitle: '可庵遺稿卷之二' },
      { childId: '가암유고-可庵遺稿卷之二', childTitle: '可庵遺稿卷之二' },
      { childId: '가암유고-可庵遺稿卷之四', childTitle: '可庵遺稿卷之四' },
      { childId: '가암유고-可庵遺稿卷之五', childTitle: '可庵遺稿卷之五' },
    ],
  };
  const gwonchaDatas2 = {
    datas: [
      { childId: '가주집-家州集序', childTitle: '家州集序' },
      { childId: '가주집-家州集年譜', childTitle: '家州集年譜' },
      { childId: '가주집-家州集卷之一', childTitle: '家州集卷之一' },
      { childId: '가주집-家州集卷之二', childTitle: '家州集卷之二' },
      { childId: '가주집-家州集卷之三', childTitle: '家州集卷之三' },
    ],
  };
  if (currentId === '가암유고')
    return JSON.parse(JSON.stringify(gwonchaDatas1));
  else if (currentId === '가주집')
    return JSON.parse(JSON.stringify(gwonchaDatas2));
  else return JSON.parse(JSON.stringify({ datas: [] }));
}

export default getGwoncha;
