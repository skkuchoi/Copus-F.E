import axios from 'axios';

function getChapter(lv1Id) {
  const response = axios({
    url: `http://ec2-52-78-232-56.ap-northeast-2.compute.amazonaws.com:8080/buga/chapter/${lv1Id}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
}

export default getChapter;
