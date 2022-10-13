import axios from 'axios';

function getHaejae(lv1Id) {
  const response = axios({
    url: `/buga/haejae/${lv1Id}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
}

export default getHaejae;
