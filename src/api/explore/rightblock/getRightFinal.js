import axios from 'axios';

function getRightFinal(muncheId) {
  const response = axios({
    url: `http://ec2-52-78-232-56.ap-northeast-2.compute.amazonaws.com:8080/article/munche/${muncheId.clickMunche}`,
    method: 'get',
  });

  return response;
}

export default getRightFinal;
