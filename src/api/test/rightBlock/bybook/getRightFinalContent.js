import axios from 'axios';

function getRightFinalContent(finalId) {
  console.log('최종정보 아이디는: ', finalId.clickFinal);
  const response = axios({
    url: `/final/${finalId.clickFinal}`,
    method: 'get',
  });

  const finalDatasA = {
    seojiId: '가암유고',
    seojiTitle: '가암유고',
    gwonchaId: '가암유고-可庵遺稿卷之一',
    gwonchaTitle: '可庵遺稿卷之一',
    muncheId: '가암유고-可庵遺稿卷之一-賦',
    muncheTitle: '賦1',
    finalData: [
      {
        title: '가암유고-可庵遺稿卷之一',
        content: '可庵遺稿卷之一',
      },
    ],
  };

  const finalDatasB = {
    seojiId: '가주집',
    seojiTitle: '가주집',
    gwonchaId: '가주집-可庵遺稿卷之一',
    gwonchaTitle: '可庵遺稿卷之一',
    muncheId: '가주집-可庵遺稿卷之一-賦',
    muncheTitle: '賦1',
    finalData: [
      {
        title: '가주집-可庵遺稿卷之一',
        content: '可庵遺稿卷之一',
      },
    ],
  };

  if (finalId.clickFinal.includes('가암유고'))
    return JSON.parse(JSON.stringify(finalDatasA));
  else if (finalId.clickFinal.includes('가주집'))
    return JSON.parse(JSON.stringify(finalDatasB));
  else return JSON.parse(JSON.stringify(finalDatasB));
}

export default getRightFinalContent;
