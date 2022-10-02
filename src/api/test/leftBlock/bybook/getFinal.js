import axios from 'axios';

function getFinal(filter, depth, currentId) {
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}/`,
    method: 'get',
  });
  const bybook1 = {
    datas: [
      {
        childId: 'ITKC_MO_1116A_0010_010_0010',
        childTitle: '出師再上表賦 應製',
      },
      {
        childId: 'ITKC_MO_1116A_0010_010_0020',
        childTitle: '卧念公服坐賦',
      },
    ],
  };
  const bybook2 = {
    datas: [
      {
        childId: 'ITKC_MO_1116A_0010_020_0010',
        childTitle: '擬古。續行路難。丁丑',
      },
      {
        childId: 'ITKC_MO_1116A_0010_020_0020',
        childTitle: '擬古。息夫人',
      },
    ],
  };
  const bybook3 = {
    datas: [
      {
        childId: 'ITKC_MO_1116A_0020_010_0010',
        childTitle: '大殿春帖字',
      },
      {
        childId: 'ITKC_MO_1116A_0020_010_0020',
        childTitle: '謁道峯書院',
      },
    ],
  };

  const byauthor1 = {
    datas: [
      {
        childId: 'ITKC_MO_1036A_0010_010_0010',
        childTitle: '訪朴玉瑞。不遇。壬寅',
      },
      {
        childId: 'ITKC_MO_1036A_0010_010_0020',
        childTitle: '自警',
      },
    ],
  };

  switch (filter) {
    case 'book':
      if (currentId === 'ITKC_MO_1116A_0010_010')
        return JSON.parse(JSON.stringify(bybook1));
      else if (currentId === 'ITKC_MO_1116A_0010_020')
        return JSON.parse(JSON.stringify(bybook2));
      else if (currentId === 'ITKC_MO_1116A_0020_010')
        return JSON.parse(JSON.stringify(bybook3));
      else return JSON.parse(JSON.stringify({ datas: [] }));
    case 'author':
      if (currentId === 'ITKC_MO_1036A_0010_010')
        return JSON.parse(JSON.stringify(byauthor1));
      else return JSON.parse(JSON.stringify({ datas: [] }));

    default:
      return;
  }
}

export default getFinal;
