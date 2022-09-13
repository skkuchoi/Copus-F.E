import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import '../../../shared/linkStyle.css';
import OtherTableBlock from '../OtherTableBlock';

const ListTableRowData = styled.span`
  font-size: 15px;
`;

function MuncheContentListBlock() {
  const munches = [
    { id: 1, name: '詩' },
    { id: 2, name: '詩' },
    { id: 3, name: '詩' },
  ];

  const { literature, consonant, bookname, gwoncha } = useParams();

  const link2munche = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/`;
  const link2Gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;

  return (
    <>
      <OtherTableBlock>
        <ListTableRowData>{gwoncha}</ListTableRowData>
      </OtherTableBlock>

      {munches.map((item) => (
        <OtherTableBlock marginLeft="39px" key={item.id}>
          <Link to={link2munche + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </OtherTableBlock>
      ))}
    </>
  );
}

export default MuncheContentListBlock;
