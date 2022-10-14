import React, { createContext, useContext } from 'react';
import styled from 'styled-components';
import { IoMdBook } from 'react-icons/io';
import { Link, useLocation, useParams } from 'react-router-dom';
import '../../shared/linkStyle.css';
import { totalFilter } from '../SearchResultLayout';
import classnames from 'classnames';

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

  .total-not-focus {
    color: black;
    &:hover {
      background-color: #eeeeee;
    }
  }
  .not-focus {
    color: gray;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

const CategoryListItemName = styled.div`
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

  console.log('filter:', filter);
  const totalDetailFilter = useContext(totalFilter);
  console.log('totalDetailFilter', totalDetailFilter.totalDetailFilter);
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
              className={classnames(
                totalDetailFilter.totalDetailFilter === 'bookTitle' &&
                  bookTitleCount !== 0
                  ? 'focus'
                  : 'total-not-focus',
                bookTitleCount === 0 ? 'not-focus' : '',
              )}
              onClick={() => {
                if (bookTitleCount)
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
              aria-disabled="true"
              className={classnames(
                totalDetailFilter.totalDetailFilter === 'authorName'
                  ? 'focus'
                  : 'total-not-focus',
                authorNameCount === 0 ? 'not-focus' : '',
              )}
              onClick={() => {
                if (authorNameCount)
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
              className={classnames(
                totalDetailFilter.totalDetailFilter === 'gwonchaTitle'
                  ? 'focus'
                  : 'total-not-focus',
                gwonchaTitleCount === 0 ? 'not-focus' : '',
              )}
              onClick={() => {
                if (gwonchaTitleCount)
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
              className={classnames(
                totalDetailFilter.totalDetailFilter === 'muncheTitle'
                  ? 'focus'
                  : 'total-not-focus',
                muncheTitleCount === 0 ? 'not-focus' : '',
              )}
              onClick={() => {
                if (muncheTitleCount)
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
              className={classnames(
                totalDetailFilter.totalDetailFilter === 'content'
                  ? 'focus'
                  : 'total-not-focus',
                contentCount === 0 ? 'not-focus' : '',
              )}
              onClick={() => {
                if (contentCount)
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
              className={classnames(
                totalDetailFilter.totalDetailFilter === 'dataId'
                  ? 'focus'
                  : 'total-not-focus',
                dataIdCount === 0 ? 'not-focus' : '',
              )}
              onClick={() => {
                if (dataIdCount)
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

        <CategoryListItemName
          className={filter === 'gwoncha-title' ? 'focus' : 'not-focus'}>
          권차({gwonchaTitleCount})
        </CategoryListItemName>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />

        <CategoryListItemName
          className={filter === 'munche-title' ? 'focus' : 'not-focus'}>
          문체({muncheTitleCount})
        </CategoryListItemName>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />

        <CategoryListItemName
          className={filter === 'content' ? 'focus' : 'not-focus'}>
          원문({contentCount})
        </CategoryListItemName>
      </CategoryListItemPositioner>

      <CategoryListItemPositioner>
        <IoMdBook className="document-icon" />

        <CategoryListItemName
          className={filter === 'data-id' ? 'focus' : 'not-focus'}>
          자료ID({dataIdCount})
        </CategoryListItemName>
      </CategoryListItemPositioner>
    </CategoryListPositioner>
  );
}

export default CategoryListBlock;
