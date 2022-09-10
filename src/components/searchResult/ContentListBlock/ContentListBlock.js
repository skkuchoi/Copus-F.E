import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
  width: 75%;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
`;

export default function ContentListBlock({ children }) {
  return <ContentBlock>{children}</ContentBlock>;
}
