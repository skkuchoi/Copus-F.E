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
  let numbering = 1;
  const rightDatas = {
    seojiId: 'seojiId',
    seojiTitle: 'seojiTitle',
    gwonchaId: 'gwonchaId',
    gwonchaTitle: 'gwonchaTitle',
    muncheTitle: 'muncheTitle',
    finals: [
      {
        finalId: 'finalId',
        finalTitle: 'finalTitle',
      },
      {
        finalId: 'finalId',
        finalTitle: 'finalTitle',
      },
    ],
  };

  const realDatas = JSON.parse(JSON.stringify(rightDatas));

  const link4Gwoncha = '/menu-explore/munche/';
  const link4Munche = '/menu-explore/final/';

  const { literature, consonant, bookname, gwoncha } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/`;

  return (
    <>
      <OtherListTableBlock iconNum="1">
        <TableItem>{realDatas.gwonchaTitle}</TableItem>
      </OtherListTableBlock>
      <OtherListTableBlock marginLeft="39px" iconNum="2">
        <TableItem>{realDatas.muncheTitle}</TableItem>
      </OtherListTableBlock>

      {realDatas.finals.map((item) => (
        <Link
          to={link4Munche + item.finalId}
          className="link-line"
          key={item.finalId}>
          <OtherListTableBlock
            marginLeft="65px"
            iconNum="0"
            numbering={numbering++}>
            <TableItem>{item.finalTitle}</TableItem>
          </OtherListTableBlock>
        </Link>
      ))}
    </>
  );
}

export default MuncheContentListBlock;
