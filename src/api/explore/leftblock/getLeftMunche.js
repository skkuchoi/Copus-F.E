import axios from 'axios';

function getLeftMunche(filter, depth, currentId) {
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}/`,
    method: 'get',
  });
  return response;
}

export default getLeftMunche;
