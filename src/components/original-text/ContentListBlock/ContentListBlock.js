import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`

  margin: 15px 5px;
  display: flex;
  flex-direction:column;
  align-items: center;
`;


export default function ContentListBlock({children}) {
  return <ContentBlock>{children}</ContentBlock>;
}
