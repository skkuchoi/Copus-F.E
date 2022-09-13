import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import '../../../shared/linkStyle.css';
import OtherTableBlock from '../OtherTableBlock';

const ListTableRowData = styled.span`
  font-size: 15px;
`;

function GwonchaContentListBlock() {
  const gwonchas = [
    { id: 1, name: '月皐先生文集卷之一' },
    { id: 2, name: '月皐先生文集卷之二' },
    { id: 3, name: '月皐先生文集卷之三' },
  ];

  const { literature, consonant, bookname } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;
  const link2Gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;

  return (
    <>
      {gwonchas.map((item) => (
        <OtherTableBlock key={item.id}>
          <Link to={link + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </OtherTableBlock>
      ))}
    </>
  );
}

export default GwonchaContentListBlock;
