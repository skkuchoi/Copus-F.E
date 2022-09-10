import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdBook } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

const CategoryList = styled.div`
  margin-top: 3px;
  display: flex;
  flex-direction: column;

  margin-left: 10px;
  .document-icon {
    border: 0.5px solid #eeeeee;
    color: gray;
    margin-right: 3px;
    position: relative;
    top: 2px;
  }
`;

const CategoryDetailElementBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
  width: fit-content;
  .link-line {
    list-style: none;
    text-decoration-line: none;
    color: black;
  }

  .focus {
    background-color: #f0be86;
    cursor: disabled;
  }

  .not-focus:hover {
    background-color: #eeeeee;
  }
`;

const CategoryDetailElementName = styled.span`
  font-size: 16px;
   
`;

function CategoryListBlock({ bookResultNum, authorResultNum, textResultNum }) {
  const { searchCategory, keyword } = useParams();

  const link = `/search-result/`;
  return (
    <CategoryList>
      <CategoryDetailElementBlock>
        <IoMdBook className="document-icon" />
        <Link to={link + '서명' + '/' + keyword} className="link-line">
          <CategoryDetailElementName
            className={searchCategory === '서명' ? 'focus' : 'not-focus'}>
            서명({bookResultNum})
          </CategoryDetailElementName>
        </Link>
      </CategoryDetailElementBlock>

      <CategoryDetailElementBlock>
        <IoMdBook className="document-icon" />
        <Link to={link + '저자' + '/' + keyword} className="link-line">
          <CategoryDetailElementName
            className={searchCategory === '저자' ? 'focus' : 'not-focus'}>
            저/편/필자({authorResultNum})
          </CategoryDetailElementName>
        </Link>
      </CategoryDetailElementBlock>

      <CategoryDetailElementBlock>
        <IoMdBook className="document-icon" />
        <Link to={link + '원문' + '/' + keyword} className="link-line">
          <CategoryDetailElementName
            className={searchCategory === '원문' ? 'focus' : 'not-focus'}>
            원문({textResultNum})
          </CategoryDetailElementName>
        </Link>
      </CategoryDetailElementBlock>
    </CategoryList>
  );
}

export default CategoryListBlock;
