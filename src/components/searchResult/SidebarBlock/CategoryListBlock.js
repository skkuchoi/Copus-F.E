import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoMdBook } from 'react-icons/io';
import { Link, useLocation, useParams } from 'react-router-dom';
import '../../shared/linkStyle.css';
import { totalFilter } from '../SearchResultLayout';

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
  const filter = pathname.split('/')[2].toString();

  // these link is for case 'total', not setting yet
  const link4Total = `/search-result/total/${keyword}`;
  const link4BookTitle = `/search-result/book-title/${keyword}`;
  const link4AuthorName = `/search-result/author-name/${keyword}`;
  const link4Content = `/search-result/content/${keyword}`;

  const totalDetailFilter = useContext(totalFilter);
  if (filter === 'total')
    return (
      <CategoryListPositioner>
        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link to={link4Total} className="link-line">
            <CategoryListItemName
              className={
                totalDetailFilter.totalDetailFilter === 'total'
                  ? 'focus'
                  : 'total-not-focus'
              }
              onClick={() => {
                totalDetailFilter.setTotalDetailFilter('total');
              }}>
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
            <CategoryListItemName
              className={
                totalDetailFilter.totalDetailFilter === 'bookTitle'
                  ? 'focus'
                  : 'total-not-focus'
              }
              onClick={() => {
                totalDetailFilter.setTotalDetailFilter('bookTitle');
              }}>
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
            <CategoryListItemName
              className={
                totalDetailFilter.totalDetailFilter === 'authorName'
                  ? 'focus'
                  : 'total-not-focus'
              }
              onClick={() => {
                totalDetailFilter.setTotalDetailFilter('authorName');
              }}>
              저/편/필자({authorNameCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>

        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link
            to={link4Total}
            className="link-line"
            state={{ display: 'gwonchaTitle' }}>
            <CategoryListItemName
              className={
                totalDetailFilter.totalDetailFilter === 'gwonchaTitle'
                  ? 'focus'
                  : 'total-not-focus'
              }
              onClick={() => {
                totalDetailFilter.setTotalDetailFilter('gwonchaTitle');
              }}>
              권차({gwonchaTitleCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>

        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link
            to={link4Total}
            className="link-line"
            state={{ display: 'muncheTitle' }}>
            <CategoryListItemName
              className={
                totalDetailFilter.totalDetailFilter === 'muncheTitle'
                  ? 'focus'
                  : 'total-not-focus'
              }
              onClick={() => {
                totalDetailFilter.setTotalDetailFilter('muncheTitle');
              }}>
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
            <CategoryListItemName
              className={
                totalDetailFilter.totalDetailFilter === 'content'
                  ? 'focus'
                  : 'total-not-focus'
              }
              onClick={() => {
                totalDetailFilter.setTotalDetailFilter('content');
              }}>
              원문({contentCount})
            </CategoryListItemName>
          </Link>
        </CategoryListItemPositioner>

        <CategoryListItemPositioner>
          <IoMdBook className="document-icon" />
          <Link
            to={link4Total}
            className="link-line"
            state={{ display: 'dataId' }}>
            <CategoryListItemName
              className={
                totalDetailFilter.totalDetailFilter === 'dataId'
                  ? 'focus'
                  : 'total-not-focus'
              }
              onClick={() => {
                totalDetailFilter.setTotalDetailFilter('dataId');
              }}>
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
          className={filter === 'book-title' ? 'focus' : 'not-focus'}>
          서명({bookTitleCount})
        </CategoryListItemName>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <CategoryListItemName
          className={filter === 'author-name' ? 'focus' : 'not-focus'}>
          저/편/필자({authorNameCount})
        </CategoryListItemName>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4Content} className="link-line">
          <CategoryListItemName
            className={filter === 'gwoncha-title' ? 'focus' : 'not-focus'}>
            권차({gwonchaTitleCount})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4Content} className="link-line">
          <CategoryListItemName
            className={filter === 'munche-title' ? 'focus' : 'not-focus'}>
            문체({muncheTitleCount})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4Content} className="link-line">
          <CategoryListItemName
            className={filter === 'content' ? 'focus' : 'not-focus'}>
            원문({contentCount})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />
        <Link to={link4Content} className="link-line">
          <CategoryListItemName
            className={filter === 'data-id' ? 'focus' : 'not-focus'}>
            자료ID({dataIdCount})
          </CategoryListItemName>
        </Link>
      </CategoryListItemPositioner>
    </CategoryListPositioner>
  );
}

export default CategoryListBlock;
