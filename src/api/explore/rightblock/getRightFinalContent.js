import axios from 'axios';

function getRightFinalContent(finalId) {
  const response = axios({
    url: `/article/final/${finalId.clickFinal}`,
    method: 'get',
  });
  // console.log('response', response);
  return response;
}

export default getRightFinalContent;
