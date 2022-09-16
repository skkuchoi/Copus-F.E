import React from 'react';
import styled from 'styled-components';
import { IoMdBook } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import '../../shared/linkStyle.css';

const CategoryListPositioner = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
`;

const CategoryListItemPositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
  width: fit-content;

  .document-icon {
    border: 0.5px solid #eeeeee;
    color: gray;
    margin-right: 3px;
  }

  .focus {
    background-color: #f0be86;
  }

  .not-focus:hover {
    background-color: #eeeeee;
  }
`;

const CategoryListItemName = styled.p`
  font-size: 16px;
  margin: 0;
`;

function CategoryListBlock({ bookResultNum, authorResultNum, textResultNum }) {
  const { searchCategory, keyword } = useParams();

  const link4BookName = `/search-result/서명/`;
  const link4AuthorName = `/search-result/저자/`;
  const link4OrigianlText = `/search-result/원문/`;

  return (
    <CategoryListPositioner>
      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4BookName + keyword} className="link-line">
          <CategoryListItemName
            className={searchCategory === '서명' ? 'focus' : 'not-focus'}>
            서명({bookResultNum})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4AuthorName + keyword} className="link-line">
          <CategoryListItemName
            className={searchCategory === '저자' ? 'focus' : 'not-focus'}>
            저/편/필자({authorResultNum})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4OrigianlText + keyword} className="link-line">
          <CategoryListItemName
            className={searchCategory === '원문' ? 'focus' : 'not-focus'}>
            원문({textResultNum})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>
    </CategoryListPositioner>
  );
}

export default CategoryListBlock;
