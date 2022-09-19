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
  }
`;

const CategoryListItemName = styled.p`
  font-size: 16px;
  margin: 0;
`;

function CategoryListBlock({ totalCount, bookTitleCount, authorNameCount, contentCount }) {
  const { keyword } = useParams();

  const { pathname } = useLocation();
  const searchFilter = pathname.split('/')[2].toString();

  const link4Total = `/search-result/total/${keyword}`;
  const link4BookTitle = `/search-result/book-title/${keyword}`;
  const link4AuthorName = `/search-result/author-name/${keyword}`;
  const link4Content = `/search-result/content/${keyword}`;

  switch (searchFilter) {
    case 'total':
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
            <Link
              to={link4Total}
              className="link-line"
              state={{ display: 'content' }}>
              <CategoryListItemName className="total-not-focus">
                원문({contentCount})
              </CategoryListItemName>
            </Link>
          </CategoryListItemPositioner>
        </CategoryListPositioner>
      );
    case 'book-title':
      return (
        <CategoryListPositioner>
          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <Link to={link4BookTitle} className="link-line">
              <CategoryListItemName className="focus">
                서명({bookTitleCount})
              </CategoryListItemName>
            </Link>
          </CategoryListItemPositioner>

          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <CategoryListItemName className="not-focus">
              저/편/필자({authorNameCount})
            </CategoryListItemName>
          </CategoryListItemPositioner>

          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <CategoryListItemName className="not-focus">
              원문({contentCount})
            </CategoryListItemName>
          </CategoryListItemPositioner>
        </CategoryListPositioner>
      );
    case 'author-name':
      return (
        <CategoryListPositioner>
          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <CategoryListItemName className="not-focus">
              서명({bookTitleCount})
            </CategoryListItemName>
          </CategoryListItemPositioner>

          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <Link to={link4AuthorName} className="link-line">
              <CategoryListItemName className="focus">
                저/편/필자({authorNameCount})
              </CategoryListItemName>
            </Link>
          </CategoryListItemPositioner>

          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <CategoryListItemName className="not-focus">
              원문({contentCount})
            </CategoryListItemName>
          </CategoryListItemPositioner>
        </CategoryListPositioner>
      );
    case 'content':
      return (
        <CategoryListPositioner>
          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <CategoryListItemName className="not-focus">
              서명({bookTitleCount})
            </CategoryListItemName>
          </CategoryListItemPositioner>

          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <CategoryListItemName className="not-focus">
              저/편/필자({authorNameCount})
            </CategoryListItemName>
          </CategoryListItemPositioner>

          <CategoryListItemPositioner>
            <IoMdBook className="document-icon" />
            <Link to={link4Content} className="link-line">
              <CategoryListItemName className="focus">
                원문({contentCount})
              </CategoryListItemName>
            </Link>
          </CategoryListItemPositioner>
        </CategoryListPositioner>
      );
    default:
      break;
  }
}

export default CategoryListBlock;
