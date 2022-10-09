import axios from 'axios';

function getRightFinal(muncheId) {
  const response = axios({
    url: `/article/munche/${muncheId.clickMunche}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
  
}

export default getRightFinal;
