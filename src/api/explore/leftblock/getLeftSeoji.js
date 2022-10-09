import axios from 'axios';

function getLeftSeoji(filter, depth, currentId) {
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}`,
    method: 'get',
  });
  console.log('response', response);
  return response;
}

export default getLeftSeoji;
