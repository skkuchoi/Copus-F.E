import axios from 'axios';

function getRightMunche(gwonchaId) {
  const response = axios({
    url: `http://ec2-52-78-232-56.ap-northeast-2.compute.amazonaws.com:8080/article/gwoncha/${gwonchaId.clickGwoncha}`,
    method: 'get',
  });

  return response;
}

export default getRightMunche;
