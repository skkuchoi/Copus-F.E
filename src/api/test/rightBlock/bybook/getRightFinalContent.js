import axios from 'axios';

function getRightFinalContent(finalId) {
  console.log('최종정보 아이디는: ', finalId.clickFinal);
  const response = axios({
    url: `/article/final/${finalId.clickFinal}`,
    method: 'get',
  });

  const finalDatasA = {
    seojiId: 'ITKC_MO_1116A',
    seojiTitle: '가암유고',
    gwonchaId: 'ITKC_MO_1116A_0010',
    gwonchaTitle: '可庵遺稿卷之一',
    muncheId: 'ITKC_MO_1116A_0010_010',
    muncheTitle: '賦',
    finalData: [
      {
        title: 'title',
        content: 'content',
      },
    ],
  };

  return JSON.parse(JSON.stringify(finalDatasA));
}

export default getRightFinalContent;
