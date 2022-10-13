import React from 'react';
import styled from 'styled-components';
import '../../shared/linkStyle.css';
import BookTableBlock from './BookTableBlock';

const TableRow = styled.div`
  font-size: 15px;
  font-weight: bold;
  background-color: #f5f5f6;
  padding: 7px 0px;
`;

function BookTableRowBlock() {
  return (
    <>
      <BookTableBlock border="1.5px solid #dadce0">
        <TableRow>번호</TableRow>
        <TableRow>서명</TableRow>
        <TableRow>저자</TableRow>
        <TableRow>집수</TableRow>
        <TableRow>간행연도</TableRow>
        <TableRow>부가정보</TableRow>
      </BookTableBlock>
    </>
  );
}

export default BookTableRowBlock;
