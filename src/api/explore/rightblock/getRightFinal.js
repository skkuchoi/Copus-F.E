import axios from 'axios';

function getRightFinal(muncheId) {
  const response = axios({
    url: `/article/munche/${muncheId.clickMunche}`,
    method: 'get',
  });

  return response;
}

export default getRightFinal;
