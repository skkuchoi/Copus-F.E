import React from 'react';
import styled from 'styled-components';

const LoadingPositioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const LoadingImg = styled.img`
  width: 50px;
  height: 50px;
`;

function Loading() {
  return (
    <LoadingPositioner>
      <LoadingImg src={process.env.PUBLIC_URL + '/img/common/Spinner.gif'} />
    </LoadingPositioner>
  );
}

export default Loading;
