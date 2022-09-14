import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import '../../../shared/linkStyle.css';
import OtherListTableBlock from '../OtherListTableBlock';

const TableItem = styled.p`
  font-size: 15px;
  margin: 0;
`;

function MuncheContentListBlock() {
  const munches = [
    { id: 1, name: '詩' },
    { id: 2, name: '詩' },
    { id: 3, name: '詩' },
  ];

  const { literature, consonant, bookname, gwoncha } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/`;
  const link4Gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;

  return (
    <>
      <Link to={link4Gwoncha} className="link-line">
        <OtherListTableBlock>
          <TableItem>{gwoncha}</TableItem>
        </OtherListTableBlock>
      </Link>

      {munches.map((item) => (
        <Link to={link + item.name} className="link-line" key={item.id}>
          <OtherListTableBlock marginLeft="39px">
            <TableItem>{item.name}</TableItem>
          </OtherListTableBlock>
        </Link>
      ))}
    </>
  );
}

export default MuncheContentListBlock;
