import axios from 'axios';

function getRightFinal(muncheId) {
  console.log('문체 아이디는: ', muncheId.clickMunche);
  const response = axios({
    url: `/munche/${muncheId.clickMunche}`,
    method: 'get',
  });
  const muncheDatas1 = {
    seojiId: '가암유고',
    seojiTitle: '가암유고',
    gwonchaId: '가암유고-可庵遺稿卷之一',
    gwonchaTitle: '可庵遺稿卷之一',
    muncheTitle: '賦1',
    finals: [
      {
        finalId: '가암유고-可庵遺稿卷之一-賦-出師再上表賦 應製',
        finalTitle: '出師再上表賦 應製',
      },
      {
        finalId: '가암유고-可庵遺稿卷之一-賦-卧念公服坐賦',
        finalTitle: '卧念公服坐賦',
      },
    ],
  };
  const muncheDatas2 = {
    seojiId: '가암유고',
    seojiTitle: '가암유고',
    gwonchaId: '가암유고-可庵遺稿卷之一',
    gwonchaTitle: '可庵遺稿卷之一',
    muncheTitle: '賦1',
    finals: [
      {
        finalId: '가주집-家州集序-序',
        finalTitle: '家州集序[鄭斗卿]',
      },
    ],
  };

  if (muncheId.clickMunche.includes('가암유고'))
    return JSON.parse(JSON.stringify(muncheDatas1));
  else if (muncheId.clickMunche.includes('가주집'))
    return JSON.parse(JSON.stringify(muncheDatas2));
  else return JSON.parse(JSON.stringify(muncheDatas2));
}

export default getRightFinal;
