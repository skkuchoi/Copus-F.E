import axios from 'axios';

function getRightMunche(gwonchaId) {
  const response = axios({
    url: `/article/gwoncha/${gwonchaId.clickGwoncha}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
  
}

export default getRightMunche;
