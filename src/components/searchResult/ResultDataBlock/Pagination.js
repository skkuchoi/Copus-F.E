import React from 'react';
import styled from 'styled-components';
import { MdArrowLeft } from 'react-icons/md';
import { MdArrowRight } from 'react-icons/md';

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

// 페이지 번호 버튼 출력
// 클릭 이벤트: 페이지 상태 변경, 화면 재 렌더링
function Pagination({ totalContent, limitPage, currentPage, setCurrentPage }) {
  // Math.ceil: 그것보다 큰 수를 반환 (?)
  const totalPageNumber = Math.ceil(totalContent / limitPage);

  return (
    <>
      <PageNumberOptionBlock>
        <MdArrowLeft
          size="40"
          className="arrow-icon"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array(totalPageNumber)
          .fill()
          .map((_, i) => (
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
          disabled={currentPage === totalPageNumber}></MdArrowRight>
      </PageNumberOptionBlock>
    </>
  );
}

export default Pagination;
