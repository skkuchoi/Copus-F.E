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
      name: '월고집(月皐集)',
      author: '조성가(趙性家)',
      zipsu: '속98집',
      year: '1929',
    },
    {
      id: 2,
      name: '월고집(月皐集)',
      author: '조성가(趙性家)',
      zipsu: '속98집',
      year: '1929',
    },
    {
      id: 3,
      name: '월고집(月皐集)',
      author: '조성가(趙性家)',
      zipsu: '속98집',
      year: '1929',
    },
  ];

  const { literature, consonant } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/`;

  return (
    <>
      {books.map((item) => (
        <Link to={link + item.name} className="link-line" key={item.id}>
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
