import React from 'react';
import styled from 'styled-components';
import { MdArrowLeft } from 'react-icons/md';
import { MdArrowRight } from 'react-icons/md';
import { useState, useEffect } from 'react';
import sliceArrayByLimit from './functions';
const PageNumberOptionBlock = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;

  .arrow-icon {
    color: #888888;
    &:hover {
      cursor: pointer;
    }

    &[disabled] {
      visibility: hidden;
    }
  }
`;

const NumberButton = styled.button`
  border: 1px solid #eaeaea;
  padding: 4px 8px;
  color: #888888;
  font-size: 15px;
  margin: 0 1px;
  background-color: white;

  &:hover {
    cursor: pointer;
  }

  //현재 페이지 상태
  &[aria-current] {
    background: #999999;
    color: white;
    cursor: revert;
  }
`;

function Pagination({ totalContent, limitPage, currentPage, setCurrentPage }) {
  //const totalPageNumber = Math.ceil(totalContent / limitPage);
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  useEffect(() => {
    if (currentPage % limitPage === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(currentPage / limitPage)]);
    } else if (currentPage % limitPage === 0) {
      setCurrentPageArray(
        totalPageArray[Math.floor(currentPage / limitPage) - 1],
      );
    }
  }, [currentPage]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalContent, limitPage);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalContent]);
  return (
    <>
      <PageNumberOptionBlock>
        <MdArrowLeft
          size="40"
          className="arrow-icon"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {currentPageArray?.map((i) => (
          <a href="#top">
            <NumberButton
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              aria-current={currentPage === i + 1 ? 'page' : null}>
              {i + 1}
            </NumberButton>
          </a>
        ))}
        <MdArrowRight
          size="40"
          className="arrow-icon"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalContent}></MdArrowRight>
      </PageNumberOptionBlock>
    </>
  );
}

export default Pagination;
