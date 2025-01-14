import React from 'react';
import styled from 'styled-components';

const CategoryListItemTitlePositioner = styled.div`
  padding: 4.5px 3px;
  border-bottom: 1px solid #dadce0;
  width: 98%;
`;

const CategoryListItemTitle = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 0;
  ::before {
    content: '▼';
    margin-right: 5px;
    position: relative;
    top: -2px;
    font-size: 10px;
  }
`;

function CategoryListItemTitleBlock({ title, number = 0 }) {
  return (
    <CategoryListItemTitlePositioner>
      <CategoryListItemTitle>
        {title} ({number})
      </CategoryListItemTitle>
    </CategoryListItemTitlePositioner>
  );
}

export default CategoryListItemTitleBlock;
