import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BookTableBlock from '../BookTableBlock';

const TableItem = styled.p`
  font-size: 15px;
  padding: 5px 0px;
  margin: 0;
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
            <TableItem>{item.id}</TableItem>
            <TableItem>{item.name}</TableItem>
            <TableItem>{item.author}</TableItem>
            <TableItem>{item.zipsu}</TableItem>
            <TableItem>{item.year}</TableItem>
          </BookTableBlock>
        </Link>
      ))}
    </>
  );
}

export default BookContentListBlock;
