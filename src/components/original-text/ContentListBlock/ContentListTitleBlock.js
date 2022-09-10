import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitlesBlock = styled.div`
  padding-bottom: 8px;
  border-bottom: 2px solid #dadce0;
  width: 98%;

  .link-line {
    list-style: none;
    text-decoration-line: none;
    color: black;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  ::before {
    content: '▼';
    margin-right: 5px;
    font-size: 10px;
    position: relative;
    top: -2px;
  }
`;

function ContentListTitleBlock({ title, link = '' }) {
  return (
    <TitlesBlock>
      <Link to={link} className="link-line">
        <Title>{title}</Title>
      </Link>
    </TitlesBlock>
  );
}

export default ContentListTitleBlock;
