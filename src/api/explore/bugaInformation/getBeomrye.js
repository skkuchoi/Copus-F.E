import axios from 'axios';

function getBeomrye(lv1Id) {
  const response = axios({
    url: `/buga/beomrye/${lv1Id}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
}

export default getBeomrye;
