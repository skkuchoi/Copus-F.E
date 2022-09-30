import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../shared/linkStyle.css';

const TitlePositioner = styled.div`
  margin: 10px 0px;
  margin-left: 20px;
`;

const Title = styled.h6`
  font-size: 16px;
  margin: 0;
  margin-bottom: 5px;
  ::before {
    content: '▼';
    margin-right: 5px;
    font-size: 10px;
    position: relative;
    top: -2px;
  }
`;

function ContentListTitleBlock({ title = '', children }) {
  return (
    <TitlePositioner>
      {title !== '' && <Title>{title}</Title>}
      {children}
    </TitlePositioner>
  );
}

export default ContentListTitleBlock;
