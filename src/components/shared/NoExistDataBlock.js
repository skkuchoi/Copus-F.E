import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-top: 5px;
  font-size: 15px;
  padding-left: 5px;
`;
function NoExistDataBlock() {
  return <Text>일치하는 내용이 없습니다.</Text>;
}

export default NoExistDataBlock;
