import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  font-size: 15px;
 margin-left: 15px;
`;

function GwonchaTitle({ title }) {
  return <Li>{title}</Li>;
}

export default GwonchaTitle;
