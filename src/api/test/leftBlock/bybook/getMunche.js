import axios from 'axios';

function getMunche(filter, depth, currentId) {
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}/`,
    method: 'get',
  });
  const bybook1 = {
    datas: [
      { childId: 'ITKC_MO_1116A_0010_010', childTitle: '賦' },
      { childId: 'ITKC_MO_1116A_0010_020', childTitle: '詩' },
    ],
  };
  const bybook2 = {
    datas: [{ childId: 'ITKC_MO_1116A_0020_010', childTitle: '詩' }],
  };
  // 이런 조건문은 내가 편의를 위해 적은 것 그냥 받은 데이터 return만 하면됨.
  const byauthor1 = {
    datas: [{ childId: 'ITKC_MO_1036A_0010_010', childTitle: '詩' }],
  };
  switch (filter) {
    case 'book':
      if (currentId === 'ITKC_MO_1116A_0010')
        return JSON.parse(JSON.stringify(bybook1));
      else if (currentId === 'ITKC_MO_1116A_0020')
        return JSON.parse(JSON.stringify(bybook2));
      else return JSON.parse(JSON.stringify({ datas: [] }));
    case 'author':
      if (currentId === 'ITKC_MO_1036A_0010')
        return JSON.parse(JSON.stringify(byauthor1));
      else return JSON.parse(JSON.stringify({ datas: [] }));
      break;
    default:
      break;
  }
}

export default getMunche;
