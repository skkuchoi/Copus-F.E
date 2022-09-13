import React from 'react';
import styled from 'styled-components';
import '../../shared/linkStyle.css';
import BookTableBlock from './BookTableBlock';

const TableRowText = styled.div`
  font-size: 15px;
  font-weight: bold;
  background-color: #f5f5f6;
  padding: 7px 0px;
`;

function BookTable() {
  return (
    <>
      <BookTableBlock border="1.5px solid #dadce0">
        <TableRowText>번호</TableRowText>
        <TableRowText>서명</TableRowText>
        <TableRowText>저자</TableRowText>
        <TableRowText>집수</TableRowText>
        <TableRowText>간행연도</TableRowText>
      </BookTableBlock>
    </>
  );
}

export default BookTable;
