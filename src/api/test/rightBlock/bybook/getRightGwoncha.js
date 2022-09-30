import axios from 'axios';

function getRightGwoncha(seojiId) {
  console.log('seoji Id 요청: ', seojiId);
  const response = axios({
    url: `/gwoncha/${seojiId.clickSeoji}`,
    method: 'get',
  });

  const gwonchaDatasA = {
    seojiId: 'ITKC_MO_1116A',
    seojiTitle: '가암유고',
    datas: [
      {
        gwonchaId: 'ITKC_MO_1116A_0010',
        gwonchaTitle: '可庵遺稿卷之一',
        munches: [
          {
            muncheId: 'ITKC_MO_1116A_0010_010',
            muncheTitle: '賦',
          },
          {
            muncheId: 'ITKC_MO_1116A_0010_020',
            muncheTitle: '詩',
          },
        ],
      },
      {
        gwonchaId: 'ITKC_MO_1116A_0020',
        gwonchaTitle: '可庵遺稿卷之二',
        munches: [
          {
            muncheId: 'ITKC_MO_1116A_0020_010',
            muncheTitle: '詩',
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

  const gwonchaDatasC = {
    seojiId: 'ITKC_MO_1036A',
    seojiTitle: '비수재집',
    datas: [
      {
        gwonchaId: 'ITKC_MO_1036A_0010',
        gwonchaTitle: '賁需齋先生文集卷之一',
        munches: [
          {
            muncheId: 'ITKC_MO_1036A_0010_010',
            muncheTitle: '詩',
          },
        ],
      },
      {
        gwonchaId: 'ITKC_MO_1036A_0020',
        gwonchaTitle: '賁需齋先生文集卷之二',
        munches: [
          {
            muncheId: 'ITKC_MO_1036A_0020_010',
            muncheTitle: '䟽',
          },
        ],
      },
    ],
  };

  if (seojiId.clickSeoji === 'ITKC_MO_1116A')
    return JSON.parse(JSON.stringify(gwonchaDatasA));
  else if (seojiId.clickSeoji.includes('가주집'))
    return JSON.parse(JSON.stringify(gwonchaDatasB));
  else if (seojiId.clickSeoji === 'ITKC_MO_1036A')
    return JSON.parse(JSON.stringify(gwonchaDatasC));
  else return JSON.parse(JSON.stringify(gwonchaDatasB));
}

export default getRightGwoncha;
