import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  font-size: 15px;
`;

function SeojiTitle({ id, title }) {
  return (
    <Link to={`/test1/{id}`}>
      <Li>{title}</Li>
    </Link>
  );
}

// props인 title이 바뀌지 않는 한 재렌더링 되지 않는다.
export default memo(SeojiTitle);
