import axios from 'axios';

function getRightGwoncha(seojiId) {
  const response = axios({
    url: `http://ec2-52-78-232-56.ap-northeast-2.compute.amazonaws.com:8080/article/gwoncha/${seojiId.clickSeoji}`,
    method: 'get',
  });
  return response;
}

export default getRightGwoncha;
