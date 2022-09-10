import React from 'react';
import styled from 'styled-components';

const TitlesBlock = styled.div`
  padding-bottom: 8px;
  border-bottom: 2px solid #dadce0;
  width: 98%;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  ::before {
    content: '▼';
    margin-right: 5px;
    position: relative;
    top: -2px;
    font-size: 10px;
  }
`;

function ContentListTitleBlock({ title, number = 0 }) {
  return (
    <TitlesBlock>
      <Title>
        {title} ({number})
      </Title>
    </TitlesBlock>
  );
}

export default ContentListTitleBlock;
