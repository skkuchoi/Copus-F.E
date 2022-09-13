import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import OtherTableBlock from '../OtherTableBlock';

const ListTableRowData = styled.span`
  font-size: 15px;
`;

function TitleContentListBlock() {
  const titles = [
    { id: 1, name: '上蘆沙先生 癸丑' },
    { id: 2, name: '石隅軒酬王大猷 師亨○二首' },
    { id: 3, name: '與抱甕盧時用 兢壽 讀書山房。及其歲暮先歸。拈韻相酬。' },
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
        <OtherTableBlock marginLeft="65px" key={item.id}>
          <Link to={link + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </OtherTableBlock>
      ))}
    </>
  );
}

export default TitleContentListBlock;
