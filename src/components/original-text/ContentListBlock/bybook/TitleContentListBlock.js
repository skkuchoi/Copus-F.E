import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import OtherTableBlock from '../OtherTableBlock';

const ListTableRowData = styled.span`
  font-size: 15px;
`;

function TitleContentListBlock() {
  const titles = [
    { id: 1, name: '월고집1' },
    { id: 2, name: '월고집2' },
    { id: 3, name: '월고집3' },
  ];

  const { literature, consonant, bookname, gwoncha, munche } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/${munche}/`;
  const link2gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/`;
  const link2Gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}`;

  return (
    <>
      <OtherTableBlock>
        <Link to={link2gwoncha} className="link-line">
          <ListTableRowData>{gwoncha}</ListTableRowData>
        </Link>
      </OtherTableBlock>

      <OtherTableBlock marginLeft="39px">
        <ListTableRowData>{munche}</ListTableRowData>
      </OtherTableBlock>

      {titles.map((item) => (
        <OtherTableBlock marginLeft="65px">
          <Link to={link + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </OtherTableBlock>
      ))}
    </>
  );
}

export default TitleContentListBlock;
