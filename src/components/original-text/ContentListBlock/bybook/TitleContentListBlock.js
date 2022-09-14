import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import OtherListTableBlock from '../OtherListTableBlock';

const TableItem = styled.p`
  font-size: 15px;
  margin: 0;
`;

function TitleContentListBlock() {
  const titles = [
    { id: 1, name: '上蘆沙先生 癸丑' },
    { id: 2, name: '石隅軒酬王大猷 師亨○二首' },
    { id: 3, name: '與抱甕盧時用 兢壽 讀書山房。及其歲暮先歸。拈韻相酬。' },
  ];

  const { literature, consonant, bookname, gwoncha, munche } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/${munche}/`;
  const link4Gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;
  const link4Munche = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/`;

  //title에도 원주가 있으므로 여기에서 파싱 작업이 필요하다.
  return (
    <>
      <Link to={link4Gwoncha} className="link-line">
        <OtherListTableBlock>
          <TableItem>{gwoncha}</TableItem>
        </OtherListTableBlock>
      </Link>

      <Link to={link4Munche} className="link-line">
        <OtherListTableBlock marginLeft="39px">
          <TableItem>{munche}</TableItem>
        </OtherListTableBlock>
      </Link>

      {titles.map((item) => (
        <Link to={link + item.name} className="link-line" key={item.id}>
          <OtherListTableBlock marginLeft="65px">
            <TableItem>{item.name}</TableItem>
          </OtherListTableBlock>
        </Link>
      ))}
    </>
  );
}

export default TitleContentListBlock;
