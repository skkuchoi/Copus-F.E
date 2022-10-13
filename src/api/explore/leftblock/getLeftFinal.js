import axios from 'axios';

function getLeftFinal(filter, depth, currentId) {
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}`,
    method: 'get',
  });

  return response;
}

export default getLeftFinal;
