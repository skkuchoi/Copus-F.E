import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../shared/linkStyle.css';

const Positioner = styled.div`
  width: fit-content;
  margin-bottom: 5px;
`;

const Title = styled.h6`
  font-size: 16px;
  margin: 0;
  ::before {
    content: '▼';
    margin-right: 5px;
    font-size: 10px;
    position: relative;
    top: -2px;
  }

  &:hover {
    cursor: pointer;
  }
`;

function ContentListTitleBlock({ title, link = '' }) {
  return (
    <Positioner>
      <Link to={link} className="link-line">
        <Title>{title}</Title>
      </Link>
    </Positioner>
  );
}

export default ContentListTitleBlock;
