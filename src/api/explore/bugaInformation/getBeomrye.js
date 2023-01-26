import axios from 'axios';

function getBeomrye(lv1Id) {
  const response = axios({
    url: `http://ec2-52-78-232-56.ap-northeast-2.compute.amazonaws.com:8080/buga/beomrye/${lv1Id}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
}

export default getBeomrye;
