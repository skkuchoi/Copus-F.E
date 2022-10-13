import axios from 'axios';

function getLeftAuthor(filter, depth, currentId) {
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}/`,
    method: 'get',
  });

  return response;
}

export default getLeftAuthor;
