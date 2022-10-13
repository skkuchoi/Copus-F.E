import axios from 'axios';

function getChapter(lv1Id) {
  const response = axios({
    url: `/buga/chapter/${lv1Id}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
}

export default getChapter;
