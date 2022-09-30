import axios from 'axios';

function getRightMunche(gwonchaId) {
  console.log('권차 아이디는: ', gwonchaId.clickGwoncha);
  const response = axios({
    url: `/gwoncha/${gwonchaId.clickGwoncha}`,
    method: 'get',
  });

  const gwonchaDatasA = {
    seojiId: '가암유고',
    seojiTitle: '가암유고',
    datas: [
      {
        gwonchaId: '가암유고-可庵遺稿卷之一',
        gwonchaTitle: '可庵遺稿卷之一',
        munches: [
          {
            muncheId: '가암유고-可庵遺稿卷之一-賦',
            muncheTitle: '賦1',
          },
          {
            muncheId: '가암유고-可庵遺稿卷之一-賦',
            muncheTitle: '賦2',
          },
        ],
      },
    ],
  };

  const gwonchaDatasB = {
    seojiId: '가주집',
    seojiTitle: '가주집',
    datas: [
      {
        gwonchaId: '가주집-可庵遺稿卷之一',
        gwonchaTitle: '可庵遺稿卷之一',
        munches: [
          {
            muncheId: '가주집-可庵遺稿卷之一-賦',
            muncheTitle: '賦',
          },
        ],
      },
    ],
  };

  if (gwonchaId.clickGwoncha.includes('가암유고'))
    return JSON.parse(JSON.stringify(gwonchaDatasA));
  else if (gwonchaId.clickGwoncha.includes('가주집'))
    return JSON.parse(JSON.stringify(gwonchaDatasB));
  else return JSON.parse(JSON.stringify(gwonchaDatasB));
}

export default getRightMunche;
