import React from 'react';
import styled from 'styled-components';
import { RiArrowDropDownLine } from 'react-icons/ri';

const CategoryListTitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  padding-bottom: 3px;
  padding-left: 5px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 5px;
  .arrow-icon {
    color: #c55a11;

    margin-top: 2px;
    margin-left: 2px;
    height: 20px;
  }
  .link-line {
    list-style: none;
    text-decoration-line: none;
  }
`;

const CategoryListTitle = styled.span`
  color: #c55a11;
  font-size: 20px;
  font-weight: bold;
`;

export function KindListBlock({ element, number }) {
  return (
    <>
      <CategoryListTitleBlock>
        <CategoryListTitle>
          {element} ({number})
        </CategoryListTitle>
        <RiArrowDropDownLine className="arrow-icon" size="25" />
      </CategoryListTitleBlock>
    </>
  );
}
