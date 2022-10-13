import axios from 'axios';

function getRightMunche(gwonchaId) {
  const response = axios({
    url: `/article/gwoncha/${gwonchaId.clickGwoncha}`,
    method: 'get',
  });

  return response;
}

export default getRightMunche;
