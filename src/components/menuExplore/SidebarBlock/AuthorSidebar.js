import React from 'react';
import styled from 'styled-components';
import LoadingDisplay from '../../Loading/loadingDisplay';

const LoadingPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function loadingdisplay() {
  return (
    <LoadingPosition>
      <LoadingDisplay />
    </LoadingPosition>
  );
}

export default loadingdisplay;
