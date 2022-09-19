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
  const rightDatas = {
    seojiId: 'seojiId',
    seojiTitle: 'seojiTitle',
    datas: [
      {
        gwonchaId: 'gwonchaId1',
        gwonchaTitle: 'gwonchaTitle',
        munches: [
          {
            muncheId: 'muncheId3',
            muncheTitle: 'muncheTitle',
          },
        ],
      },
      {
        gwonchaId: 'gwonchaId2',
        gwonchaTitle: 'gwonchaTitle',
        munches: [
          {
            muncheId: 'muncheId1',
            muncheTitle: 'muncheTitle',
          },
          {
            muncheId: 'muncheId2',
            muncheTitle: 'muncheTitle',
          },
        ],
      },
    ],
  };
  const realDatas = JSON.parse(JSON.stringify(rightDatas));

  const link4Munche = '/menu-explore/munche/';

  return (
    <>
      {realDatas.datas.map((item) => (
        <>
          <OtherListTableBlock iconNum="1" key={item.gwonchaId}>
            <TableItem>{item.gwonchaTitle}</TableItem>
          </OtherListTableBlock>
          {item.munches.map((item) => (
            <Link
              to={link4Munche + item.muncheId}
              className="link-line"
              key={item.muncheId}>
              <OtherListTableBlock marginLeft="39px" iconNum="2">
                <TableItem>{item.muncheTitle}</TableItem>
              </OtherListTableBlock>
            </Link>
          ))}
        </>
      ))}
    </>
  );
}

export default GwonchaContentListBlock;
