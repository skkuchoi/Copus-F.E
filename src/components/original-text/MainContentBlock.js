import React from 'react';
import styled from 'styled-components';

const MainContentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`;

function MainContentBlock({ children }) {
  return <MainContentsBlock>{children}</MainContentsBlock>;
}

export default MainContentBlock;
