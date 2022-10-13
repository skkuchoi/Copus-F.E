import axios from 'axios';

function getRightFinalContent(finalId) {
  const response = axios({
    url: `/article/final/${finalId.clickFinal}`,
    method: 'get',
  });
  return response;
}

export default getRightFinalContent;
