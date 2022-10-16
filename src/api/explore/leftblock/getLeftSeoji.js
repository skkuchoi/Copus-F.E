import axios from 'axios';

function getLeftSeoji(filter, depth, currentId) {
  //console.log(currentId);
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}`,
    method: 'get',
  });
  return response;
}

export default getLeftSeoji;
