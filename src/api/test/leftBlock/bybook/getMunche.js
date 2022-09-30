import axios from 'axios';

function getMunche(depth, currentId) {
  const response = axios({
    url: `/book/${depth}/${currentId}/`,
    method: 'get',
  });
  const muncheDatas1 = {
    datas: [
      { childId: '가암유고-可庵遺稿卷之一-賦', childTitle: '賦' },
      { childId: '가암유고-可庵遺稿卷之一-詩', childTitle: '詩' },
    ],
  };
  const muncheDatas2 = {
    datas: [{ childId: '가주집-家州集序-序', childTitle: '[序]' }],
  };
  if (currentId.includes('가암유고'))
    return JSON.parse(JSON.stringify(muncheDatas1));
  else if (currentId.includes('가주집'))
    return JSON.parse(JSON.stringify(muncheDatas2));
  else return JSON.parse(JSON.stringify({ datas: [] }));
}

export default getMunche;
