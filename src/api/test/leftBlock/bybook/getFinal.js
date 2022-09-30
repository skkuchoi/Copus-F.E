import axios from 'axios';

function getFinal(depth, currentId) {
  const response = axios({
    url: `/book/${depth}/${currentId}/`,
    method: 'get',
  });
  const muncheDatas1 = {
    datas: [
      {
        childId: '가암유고-可庵遺稿卷之一-賦-出師再上表賦 應製',
        childTitle: '出師再上表賦 應製',
      },
      {
        childId: '가암유고-可庵遺稿卷之一-賦-卧念公服坐賦',
        childTitle: '卧念公服坐賦',
      },
    ],
  };
  const muncheDatas2 = {
    datas: [{ childId: '가주집-家州集序-序', childTitle: '家州集序[鄭斗卿]' }],
  };
  if (currentId.includes('가암유고'))
    return JSON.parse(JSON.stringify(muncheDatas1));
  else if (currentId.includes('가주집'))
    return JSON.parse(JSON.stringify(muncheDatas2));
  else return JSON.parse(JSON.stringify({ datas: [] }));
}

export default getFinal;
