import axios from 'axios';

function getRightMunche(gwonchaId) {
  const response = axios({
    url: `/article/gwoncha/${gwonchaId.clickGwoncha}`,
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
    ],
  };

  const gwonchaDatasB = {
    seojiId: 'ITKC_MO_1116A',
    seojiTitle: '가암유고',
    datas: [
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
    ],
  };

  const gwonchaDatasD = {
    seojiId: 'ITKC_MO_1036A',
    seojiTitle: '비수재집',
    datas: [
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

  if (gwonchaId.clickGwoncha === 'ITKC_MO_1116A_0010')
    return JSON.parse(JSON.stringify(gwonchaDatasA));
  else if (gwonchaId.clickGwoncha === 'ITKC_MO_1116A_0020')
    return JSON.parse(JSON.stringify(gwonchaDatasB));
  else if (gwonchaId.clickGwoncha === 'ITKC_MO_1036A_0010')
    return JSON.parse(JSON.stringify(gwonchaDatasC));
  else if (gwonchaId.clickGwoncha === 'ITKC_MO_1036A_0020')
    return JSON.parse(JSON.stringify(gwonchaDatasD));
  else return JSON.parse(JSON.stringify([]));
}

export default getRightMunche;
