import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import BookTableBlock from '../BookTableBlock';

const ListTableRowData = styled.span`
  font-size: 15px;
  padding: 5px 0px;
`;

function BookContentListBlock() {
  const books = [
    {
      id: 1,
      name: '上蘆沙先生',
      author: '저자1',
      zipsu: '속98집',
      year: '1929',
    },
    {
      id: 2,
      name: '石隅軒酬王大猷',
      author: '저자2',
      zipsu: '속98집',
      year: '1929',
    },
    {
      id: 3,
      name: '與抱甕盧時用 讀書山房。及其歲暮先歸。',
      author: '저자3',
      zipsu: '속98집',
      year: '1929',
    },
  ];

  const { literature, consonant } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/`;

  return (
    <>
      {books.map((item) => (
        <Link to={link + item.name} className="link-line">
          <BookTableBlock bgColor="#edeaea">
            <ListTableRowData>{item.id}</ListTableRowData>
            <ListTableRowData>{item.name}</ListTableRowData>
            <ListTableRowData>{item.author}</ListTableRowData>
            <ListTableRowData>{item.zipsu}</ListTableRowData>
            <ListTableRowData>{item.year}</ListTableRowData>
          </BookTableBlock>
        </Link>
      ))}
    </>
  );
}

export default BookContentListBlock;
