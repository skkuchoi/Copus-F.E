import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  text-decoration-line: underline;
  text-decoration-color: rgba(188, 248, 183, 0.4);
  text-decoration-thickness: 5px;
`;

function Title({ content }) {
  return <TitleBlock>{content}</TitleBlock>;
}

export default Title;
