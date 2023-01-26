import axios from 'axios';

function getLeftAuthor(filter, depth, currentId) {
  const response = axios({
    url: `http://ec2-52-78-232-56.ap-northeast-2.compute.amazonaws.com:8080/category/${filter}/${depth}/${currentId}/`,
    method: 'get',
  });
  return response;
}

export default getLeftAuthor;
