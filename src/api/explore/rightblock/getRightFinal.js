import axios from 'axios';

function getRightFinal(muncheId) {
  const response = axios({
    url: `/article/munche/${muncheId.clickMunche}`,
    method: 'get',
  });
  const muncheDatas1 = {
    seojiId: 'ITKC_MO_1116A',
    seojiTitle: '가암유고',
    gwonchaId: 'ITKC_MO_1116A_0010',
    gwonchaTitle: '可庵遺稿卷之一',
    muncheTitle: '賦',
    finals: [
      {
        finalId: 'ITKC_MO_1116A_0010_010_0010',
        finalTitle: '出師再上表賦 應製',
      },
      {
        finalId: 'ITKC_MO_1116A_0010_010_0020',
        finalTitle: '卧念公服坐賦',
      },
    ],
  };
  const muncheDatas2 = {
    seojiId: 'ITKC_MO_1116A',
    seojiTitle: '가암유고',
    gwonchaId: 'ITKC_MO_1116A_0010',
    gwonchaTitle: '可庵遺稿卷之一',
    muncheTitle: '詩',
    finals: [
      {
        finalId: 'ITKC_MO_1116A_0010_020_0010',
        finalTitle: '擬古。續行路難。丁丑',
      },
      {
        finalId: 'ITKC_MO_1116A_0010_020_0020',
        finalTitle: '擬古。息夫人',
      },
    ],
  };

  const muncheDatas3 = {
    seojiId: 'ITKC_MO_1116A',
    seojiTitle: '가암유고',
    gwonchaId: 'ITKC_MO_1116A_0020',
    gwonchaTitle: '可庵遺稿卷之二',
    muncheTitle: '詩',
    finals: [
      {
        finalId: 'ITKC_MO_1116A_0020_010_0010',
        finalTitle: '大殿春帖字',
      },
      {
        finalId: 'ITKC_MO_1116A_0020_010_0020',
        finalTitle: '謁道峯書院',
      },
    ],
  };

  const muncheDatasA = {
    seojiId: 'ITKC_MO_1036A',
    seojiTitle: '비수재집',
    gwonchaId: 'ITKC_MO_1036A_0010',
    gwonchaTitle: '賁需齋先生文集卷之一',
    muncheTitle: '䟽',
    finals: [
      {
        finalId: 'ITKC_MO_1036A_0010_010_0010',
        finalTitle: '擬上時務封事',
      },
      {
        finalId: 'ITKC_MO_1036A_0010_010_0020',
        finalTitle: '代嶺南儒生。請德巖書院賜額䟽',
      },
    ],
  };

  if (muncheId.clickMunche === 'ITKC_MO_1116A_0010_010')
    return JSON.parse(JSON.stringify(muncheDatas1));
  else if (muncheId.clickMunche === 'ITKC_MO_1116A_0010_020')
    return JSON.parse(JSON.stringify(muncheDatas2));
  else if (muncheId.clickMunche === 'ITKC_MO_1116A_0020_010')
    return JSON.parse(JSON.stringify(muncheDatas3));
    else if(muncheId.clickMunche === 'ITKC_MO_1036A_0010_010')return JSON.parse(JSON.stringify(muncheDatasA));
  else return JSON.parse(JSON.stringify([]));
}

export default getRightFinal;
