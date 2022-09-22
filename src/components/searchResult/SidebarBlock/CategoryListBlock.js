import React from 'react';
import styled from 'styled-components';
import { IoMdBook } from 'react-icons/io';
import { Link, useLocation, useParams } from 'react-router-dom';
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

  .not-focus {
    color: gray;
    &:hover {
      cursor: not-allowed;
    }
  }

  .total-not-focus {
    color: black;
    &:hover {
      background-color: #eeeeee;
    }
  }
`;

const CategoryListItemName = styled.p`
  font-size: 16px;
  margin: 0;
`;

function CategoryListBlock({
  totalCount,
  bookTitleCount,
  authorNameCount,
  gwonchaTitleCount,
  muncheTitleCount,
  contentCount,
  dataIdCount,
}) {
  const { keyword } = useParams();

  const { pathname } = useLocation();
  const searchFilter = pathname.split('/')[2].toString();

  const link4Total = `/search-result/total/${keyword}`;
  const link4BookTitle = `/search-result/book-title/${keyword}`;
  const link4AuthorName = `/search-result/author-name/${keyword}`;
  const link4Content = `/search-result/content/${keyword}`;

  if (searchFilter === 'total')
    return (
      <CategoryListPositioner>
        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link to={link4Total} className="link-line">
            <CategoryListItemName className="focus">
              전체({totalCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>
        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link
            to={link4Total}
            className="link-line"
            state={{ display: 'bookTitle' }}>
            <CategoryListItemName className="total-not-focus">
              서명({bookTitleCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>

        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link
            to={link4Total}
            className="link-line"
            state={{ display: 'authorName' }}>
            <CategoryListItemName className="total-not-focus">
              저/편/필자({authorNameCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>

        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link to={link4Content} className="link-line">
            <CategoryListItemName className="total-not-focus">
              권차({gwonchaTitleCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>

        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link to={link4Content} className="link-line">
            <CategoryListItemName className="total-not-focus">
              문체({muncheTitleCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>

        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link
            to={link4Total}
            className="link-line"
            state={{ display: 'content' }}>
            <CategoryListItemName className="total-not-focus">
              원문({contentCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>

        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link to={link4Content} className="link-line">
            <CategoryListItemName className="total-not-focus">
              자료ID({dataIdCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>
      </CategoryListPositioner>
    );

  return (
    <CategoryListPositioner>
      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <CategoryListItemName
          className={searchFilter === 'book-title' ? 'focus' : 'not-focus'}>
          서명({bookTitleCount})
        </CategoryListItemName>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <CategoryListItemName
          className={searchFilter === 'author-name' ? 'focus' : 'not-focus'}>
          저/편/필자({authorNameCount})
        </CategoryListItemName>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4Content} className="link-line">
          <CategoryListItemName
            className={
              searchFilter === 'gwoncha-title' ? 'focus' : 'not-focus'
            }>
            권차({gwonchaTitleCount})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4Content} className="link-line">
          <CategoryListItemName
            className={searchFilter === 'munche-title' ? 'focus' : 'not-focus'}>
            문체({muncheTitleCount})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4Content} className="link-line">
          <CategoryListItemName
            className={searchFilter === 'content' ? 'focus' : 'not-focus'}>
            원문({contentCount})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4Content} className="link-line">
          <CategoryListItemName
            className={searchFilter === 'id' ? 'focus' : 'not-focus'}>
            자료ID({dataIdCount})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>
    </CategoryListPositioner>
  );
}

export default CategoryListBlock;
