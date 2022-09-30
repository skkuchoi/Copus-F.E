import axios from 'axios';

function getRightGwoncha(seojiId) {
  console.log('서지 아이디는: ', seojiId.clickSeoji);
  const response = axios({
    url: `/gwoncha/${seojiId.clickSeoji}`,
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
            muncheTitle: '賦',
          },
        ],
      },
      {
        gwonchaId: '가암유고-可庵遺稿卷之二',
        gwonchaTitle: '可庵遺稿卷之二',
        munches: [
          {
            muncheId: '가암유고-可庵遺稿卷之二-賦',
            muncheTitle: '賦',
          },
          {
            muncheId: '가암유고-可庵遺稿卷之二-賦',
            muncheTitle: '賦',
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
      {
        gwonchaId: '가주집-可庵遺稿卷之二',
        gwonchaTitle: '可庵遺稿卷之二',
        munches: [
          {
            muncheId: '가주집-可庵遺稿卷之二-賦',
            muncheTitle: '賦',
          },
          {
            muncheId: '가주집-可庵遺稿卷之二-賦',
            muncheTitle: '賦',
          },
        ],
      },
    ],
  };

  if (seojiId.clickSeoji.includes('가암유고'))
    return JSON.parse(JSON.stringify(gwonchaDatasA));
  else if (seojiId.clickSeoji.includes('가주집'))
    return JSON.parse(JSON.stringify(gwonchaDatasB));
  else return JSON.parse(JSON.stringify(gwonchaDatasB));
}

export default getRightGwoncha;
