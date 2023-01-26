import axios from 'axios';

function getRightFinalContent(finalId) {
  const response = axios({
    url: `http://ec2-52-78-232-56.ap-northeast-2.compute.amazonaws.com:8080/article/final/${finalId.clickFinal}`,
    method: 'get',
  });
  return response;
}

export default getRightFinalContent;
