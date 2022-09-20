import axios from 'axios';

async function getDepth1List(depth, currentId) {
  //console.log('currentId:::::: ', currentId);
  const response = axios({
    url: `book/${depth}/${currentId}`,
    method: 'get',
    data: {
      currentId: currentId,
    },
  });
  const leftDatasDepth1 = {
    datas: [
      {
        childId: '가childId1',
        childTitle: '가childTitleDepth2-1',
      },
      {
        childId: '가childId2',
        childTitle: '가childTitleDepth2-2',
      },
      {
        childId: '가childId3',
        childTitle: '가childTitleDepth2-3',
      },
      {
        childId: '가childId4',
        childTitle: '가childTitleDepth2-4',
      },
      {
        childId: '가childId5',
        childTitle: '가childTitleDepth2-5',
      },
      {
        childId: '가childId6',
        childTitle: '가childTitleDepth2-6',
      },
      {
        childId: '가childId7',
        childTitle: '가childTitleDepth2-7',
      },
      {
        childId: '가childId8',
        childTitle: '가childTitleDepth2-8',
      },
      {
        childId: '가childId9',
        childTitle: '가childTitleDepth2-9',
      },
      {
        childId: '가childId10',
        childTitle: '가childTitleDepth2-10',
      },
      {
        childId: '가childId11',
        childTitle: '가childTitleDepth2-11',
      },
      {
        childId: '가childId12',
        childTitle: '가childTitleDepth2-12',
      },
      {
        childId: '가childId13',
        childTitle: '가childTitleDepth2-13',
      },
      {
        childId: '가childId14',
        childTitle: '가childTitleDepth2-14',
      },
      {
        childId: '가childId15',
        childTitle: '가childTitleDepth2-15',
      },
      {
        childId: '가childId16',
        childTitle: '가childTitleDepth2-16',
      },
      {
        childId: '가childId17',
        childTitle: '가childTitleDepth2-17',
      },
      {
        childId: '가childId18',
        childTitle: '가childTitleDepth2-18',
      },
      {
        childId: '가childId19',
        childTitle: '가childTitleDepth2-19',
      },
      {
        childId: '가childId20',
        childTitle: '가childTitleDepth2-20',
      },
      {
        childId: '가childId21',
        childTitle: '가childTitleDepth2-21',
      },
      {
        childId: '나childId1',
        childTitle: '나childTitleDepth2-1',
      },
      {
        childId: '나childId2',
        childTitle: '나childTitleDepth2-2',
      },
      {
        childId: '나childId3',
        childTitle: '나childTitleDepth2-3',
      },
      {
        childId: '나childId4',
        childTitle: '나childTitleDepth2-4',
      },
      {
        childId: '나childId5',
        childTitle: '나childTitleDepth2-5',
      },
      {
        childId: '나childId6',
        childTitle: '나childTitleDepth2-6',
      },
      {
        childId: '나childId7',
        childTitle: '나childTitleDepth2-7',
      },
      {
        childId: '나childId8',
        childTitle: '나childTitleDepth2-8',
      },
      {
        childId: '나childId9',
        childTitle: '나childTitleDepth2-9',
      },
      {
        childId: '나childId10',
        childTitle: '나childTitleDepth2-10',
      },
      {
        childId: '나childId11',
        childTitle: '나childTitleDepth2-11',
      },
      {
        childId: '나childId12',
        childTitle: '나childTitleDepth2-12',
      },
      {
        childId: '나childId13',
        childTitle: '나childTitleDepth2-13',
      },
      {
        childId: '나childId14',
        childTitle: '나childTitleDepth2-14',
      },
      {
        childId: '나childId15',
        childTitle: '나childTitleDepth2-15',
      },
      {
        childId: '나childId16',
        childTitle: '나childTitleDepth2-16',
      },
      {
        childId: '나childId17',
        childTitle: '나childTitleDepth2-17',
      },
      {
        childId: '나childId18',
        childTitle: '나childTitleDepth2-18',
      },
      {
        childId: '나childId19',
        childTitle: '나childTitleDepth2-19',
      },
      {
        childId: '나childId20',
        childTitle: '나childTitleDepth2-20',
      },
      {
        childId: '나childId21',
        childTitle: '나childTitleDepth2-21',
      },
    ],
  };

  const depth1Datas = JSON.parse(JSON.stringify(leftDatasDepth1));

  return depth1Datas;
}

export default getDepth1List;
