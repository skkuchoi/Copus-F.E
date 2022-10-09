import axios from 'axios';

function getRightGwoncha(seojiId) {
  const response = axios({
    url: `/article/gwoncha/${seojiId.clickSeoji}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
}

export default getRightGwoncha;
