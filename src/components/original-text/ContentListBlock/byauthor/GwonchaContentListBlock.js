import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import '../../../shared/linkStyle.css';
import OtherListTableBlock from '../OtherListTableBlock';

const TableItem = styled.p`
  font-size: 15px;
  margin: 0;
`;

function GwonchaContentListBlock() {
  const gwonchas = [
    { id: 1, name: '月皐先生文集卷之一' },
    { id: 2, name: '月皐先生文集卷之二' },
    { id: 3, name: '月皐先生文集卷之三' },
  ];

  const { literature, consonant, authorname, bookname } = useParams();
  const link = `/original-text/${literature}/byauthor/${consonant}/${authorname}/${bookname}/`;

  return (
    <>
      {gwonchas.map((item) => (
        <Link to={link + item.name} className="link-line" key={item.id}>
          <OtherListTableBlock>
            <TableItem>{item.name}</TableItem>
          </OtherListTableBlock>
        </Link>
      ))}
    </>
  );
}

export default GwonchaContentListBlock;
