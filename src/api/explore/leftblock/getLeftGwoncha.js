import axios from 'axios';

function getLeftGwoncha(filter, depth, currentId) {
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}`,
    method: 'get',
  });
  const bybook1 = {
    datas: [
      { childId: 'ITKC_MO_1116A_0010', childTitle: '可庵遺稿卷之一' },
      { childId: 'ITKC_MO_1116A_0020', childTitle: '可庵遺稿卷之二' },
    ],
  };
  const bybook2 = {
    datas: [
      { childId: '가주집-家州集序', childTitle: '家州集序' },
      { childId: '가주집-家州集年譜', childTitle: '家州集年譜' },
      { childId: '가주집-家州集卷之一', childTitle: '家州集卷之一' },
      { childId: '가주집-家州集卷之二', childTitle: '家州集卷之二' },
      { childId: '가주집-家州集卷之三', childTitle: '家州集卷之三' },
    ],
  };
  const byauthor1 = {
    datas: [
      { childId: 'ITKC_MO_1036A_0010', childTitle: '賁需齋先生文集卷之一' },
      { childId: 'ITKC_MO_1036A_0020', childTitle: '賁需齋先生文集卷之二' },
    ],
  };

  switch (filter) {
    case 'book':
      if (currentId === 'ITKC_MO_1116A')
        return JSON.parse(JSON.stringify(bybook1));
      else if (currentId === '가주집')
        return JSON.parse(JSON.stringify(bybook2));
      else return JSON.parse(JSON.stringify({ datas: [] }));

    case 'author':
      if (currentId === 'ITKC_MO_1036A')
        return JSON.parse(JSON.stringify(byauthor1));
      else if (currentId === '가주집')
        return JSON.parse(JSON.stringify(bybook2));
      else return JSON.parse(JSON.stringify({ datas: [] }));

    default:
      break;
  }
}

export default getLeftGwoncha;
